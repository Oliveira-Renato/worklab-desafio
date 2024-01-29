// Importa hooks necessários e estilos
import { useEffect, useState } from "react";
import { styles } from '../utils/styles'

// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import ButtonsDefault from "../components/ButtonsDefault";

// Componente principal FormularioPaciente
const FormularioPaciente = () => {
  // Estados para controlar o formulário e a carga
  const [ loading, setLoading ] = useState(false)
  const [paciente, setPaciente] = useState({
    nome_completo: "",
    email: "",
    celular: "",
    sexo: "M",
    numero_atendimento: null,
  })

  // Realiza uma requisição para obter o último valor da coluna numero_atendimento
  useEffect(() => {
    axiosClient.get('/paciente/ultimo-numero-atendimento')
      .then(response => {
        const ultimoNumeroAtendimento = response.data;
        const numeroAtendimento = isNaN(ultimoNumeroAtendimento)  ? 1 : ultimoNumeroAtendimento + 1;
        console.log( numeroAtendimento)
        setPaciente(prevPaciente => ({ ...prevPaciente, numero_atendimento: numeroAtendimento }))
      })
      .catch(error => {
        console.error('Erro ao obter o último número de atendimento:', error);
      });
  }, [loading]);

  // Função para manipular mudanças nos inputs do formulário
  const handleInputChange = (campo, valor) => {
    setPaciente((prevPaciente) => ({...prevPaciente, [campo]: valor}))
  }

  // Função para lidar com o envio do formulário
  const handleSalvar = (e) => {
    e.preventDefault()
    setLoading(true)

    // Envia dados para o backend
    axiosClient.post('/pacientes', paciente)
    .then(response => {
      console.log('Paciente cadastrado com sucesso', paciente.data)
      setPaciente({
        nome_completo: "",
        email: "",
        celular: "",
        sexo: ""
      })

      setLoading(false)
    })
    .catch( error => {
      console.error('Erro ao cadastrar paciente:', error)
      setLoading(false)
    })
  }
  
  // Renderiza a estrutura do componente
  return (
    <>
      {/* Barra de navegação */}
      <NavBar />

      {/* Formulário */}
      <form onSubmit={handleSalvar}>
        <div className="space-y-12 m-auto">
          <div className="border-b border-gray-900/10 pb-12">
            
            {/* Cabeçalho do formulário */}
            <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
              <h2 className="text-3xl font-bold mb-2">Cadastro de Pacientes</h2>
              <p className="text-lg">Registre novos pacientes para manter um histórico clínico detalhado.</p>
            </div>  

            {/* Corpo do formulário */}
            <div className={`${styles.padding} w-full`}>
              <div className="m-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Renderização  dinamica de inputs */}
                {['nome_completo', 'email', 'celular'].map((campo) => (
                  <Input
                    key={campo}
                    label={campo}
                    value={paciente[campo]}
                    onChange={handleInputChange}
                  />
                ))}

                {/* Input select para o campo 'sexo' */}
                <div className="sm:col-span-3">
                  <label htmlFor="sexo" className="block text-sm font-medium leading-6 text-gray-900">
                    Sexo
                  </label>
                  <div className="mt-2">
                    <select
                      id="sexo"
                      name="sexo"
                      autoComplete="sexo-name"
                      className="rounded-md ring-1 border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
                      value={paciente.sexo}
                      onChange={ (e) => handleInputChange('sexo', e.target.value )}
                    >
                      <option value={'M'}>Masculino</option>
                      <option value={'F'}>Feminino</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Botões de salvar/cancelar */}
             <div className="mx-9">
              <ButtonsDefault loading={loading} />
             </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default FormularioPaciente