// Importa hooks necessários e estilos
import { useState } from "react";
import { styles } from '../utils/styles'
import { useForm } from "react-hook-form"

// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes
import NavBar from "../components/NavBar";
import ButtonsDefault from "../components/ButtonsDefault";

// Componente principal FormularioPaciente
const FormularioPaciente =  () => {
  const { register, handleSubmit, reset } = useForm()
  const [ loading, setLoading ] = useState(false)

  // Função para lidar com o envio do formulário
  const handleSalvar = async  (data) => {
    setLoading(true)

    try {
      // Faz requisição para pegar o último número de atendimento
      const response = await axiosClient.get('/paciente/ultimo-numero-atendimento')
      const ultimoNumeroAtendimento = response.data
      const numeroAtendimento = isNaN(ultimoNumeroAtendimento) ? 1 : ultimoNumeroAtendimento + 1
      
      data.numero_atendimento = numeroAtendimento

      // Envia dados para o backend
      const postResponse = await axiosClient.post('/pacientes', data)
      alert('Paciente cadastrado com sucesso', postResponse.data)

      // Resetar o formulário após o sucesso
      reset()
      //Para o loading
      setLoading(false)
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error)
      reset()
      setLoading(false)
    }
  }

  // Renderiza a estrutura do componente
  return (
    <>
      {/* Barra de navegação */}
      <NavBar />

      {/* Formulário */}
      <form onSubmit={handleSubmit(handleSalvar)}>
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

                  <div className="sm:col-span-3" key={campo}>
                    {/* Rótulo do input */}
                    <label htmlFor={campo} className="block text-sm font-medium leading-6 text-gray-900">
                      {campo}
                    </label>
                    <div className="mt-2">
                      {/* Input controlado com propriedades value e onChange */}
                      <input

                        id={campo}
                        name={campo}
                        // value={value}
                        type="text"
                        {...register(campo)}
                        className="block w-full rounded-md ring-1 border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
                        />
                      </div>
                  </div>
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
                      {...register("sexo")}
                    >
                       <option value={''}>...</option>
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