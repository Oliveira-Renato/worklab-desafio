import { useState } from "react";
import { styles } from '../utils/styles'

// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes
import NavBar from "../components/NavBar";
import ButtonsDefault from "../components/ButtonsDefault";
import { useForm } from "react-hook-form";

// Componente principal FormularioExame
const FormularioExame = () => {
  // Estados para controlar o formulário e a carga
  const { register, handleSubmit, reset } = useForm()
  const [ loading, setLoading ] = useState(false)

  // Função para lidar com o envio do formulário
  const handleSalvar = async (data) => {
    setLoading(true)
    
    try {
      const postResponse = await axiosClient.post('/exames', data)
      alert('Exame cadastrado com sucesso', postResponse.data)
      // Resetar o formulário após o sucesso
      reset()
      setLoading(false)
    } catch (error) {
      console.error('Erro ao cadastrar exame:', error)
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
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            {/* Cabeçalho do formulário */}
            <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
              <h2 className="text-3xl font-bold mb-2">Cadastro de Exames</h2>
              <p className="text-lg">Registre os resultados dos exames para uma gestão precisa da saúde dos pacientes.</p>
            </div>

            {/* Corpo do formulário */}
            <div className={`${styles.padding} w-full`}>
              {/* Renderização dinâmica de inputs */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {['codigo','descricao', 'valor'].map((campo) => (
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
                          type="text"
                          {...register(campo)}
                          className="block w-full rounded-md ring-1 border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
                          />
                        </div>
                    </div>
                  ))}
              </div>

               {/* Botões de salvar/cancelar */}
               <ButtonsDefault loading={loading} />

            </div>
          </div>
        </div>

      </form>
    </>
  )
}

export default FormularioExame