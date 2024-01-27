import Input from "../components/Input";
import axiosClient from "../axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { styles } from '../utils/styles'
import ButtonsDefault from "../components/ButtonsDefault";

const FormularioPaciente = () => {
  const [ loading, setLoading ] = useState(false)
  const [paciente, setPaciente] = useState({
    nome_completo: "",
    email: "",
    celular: "",
    sexo: "M",
    numero_atendimento: null,
  })

  useEffect(() => {
    // Realiza uma requisição para obter o último valor da coluna numero_atendimento
    axiosClient.get('/paciente/ultimo-numero-atendimento')
      .then(response => {
        // Define o próximo valor para numero_atendimento (último valor + 1)
        console.log(response.data)
        setPaciente(prevPaciente => ({ ...prevPaciente, numero_atendimento: response.data + 1 }));
      })
      .catch(error => {
        console.error('Erro ao obter o último número de atendimento:', error);
      });
  }, [loading]);

  const handleInputChange = (campo, valor) => {
    setPaciente((prevPaciente) => ({...prevPaciente, [campo]: valor}))
  }

  const handleSalvar = (e) => {
    e.preventDefault()
    setLoading(true)

    //enviar para backend
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
  
  return (
    <>
      <NavBar />
      <form onSubmit={handleSalvar}>
        <div className="space-y-12 m-auto">
          <div className="border-b border-gray-900/10 pb-12">
            
            <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
              <h2 className="text-3xl font-bold mb-2">Cadastro de Pacientes</h2>
              <p className="text-lg">Registre novos pacientes para manter um histórico clínico detalhado.</p>
            </div>  

          
            <div className={`${styles.padding} w-full`}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Renderização  dinamica de inputs */}
                {['nome_completo', 'email', 'celular'].map((campo) => (
                  <Input
                    key={campo}
                    label={campo}
                    value={paciente[campo]}
                    onChange={handleInputChange}
                  />
                ))}

                {/* input select */}
                <div className="sm:col-span-3">
                  <label htmlFor="sexo" className="block text-sm font-medium leading-6 text-gray-900">
                    Sexo
                  </label>
                  <div className="mt-2">
                    <select
                      id="sexo"
                      name="sexo"
                      autoComplete="sexo-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
                      value={paciente.sexo}
                      onChange={ (e) => handleInputChange('sexo', e.target.value )}
                    >
                      <option value={'M'}>Masculino</option>
                      <option value={'F'}>Feminino</option>
                    </select>
                  </div>
                </div>

              </div>


              {/* buttons */}
              <ButtonsDefault loading={loading} />

            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default FormularioPaciente