// Importa hooks necessários e estilos
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { styles } from '../utils/styles'

// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes
import NavBar from "../components/NavBar";
import Input from "../components/Input";

// Componente principal FormularioExame
const FormularioExame = () => {
  // Obtém a função de navegação da biblioteca react-router-dom
  const navigateTo = useNavigate()

  // Estados para controlar o formulário e a carga
  const [ loading, setLoading ] = useState(false)
  const [exame, setExame] = useState({
    codigo: "",
    descricao: "",
    valor: "",
  })

  // Função para lidar com o cancelamento e retorno à página principal
  const handleCancelar = () => navigateTo('/')

  // Função para manipular mudanças nos inputs do formulário
  const handleInputChange = (campo, valor) => {
    setExame((prevExame) => ({...prevExame, [campo]: valor}))
  }

  // Função para lidar com o envio do formulário
  const handleSalvar = (e) => {
    e.preventDefault()
    setLoading(true)

    // Envia dados para o backend
    axiosClient.post('/exames', exame)
    .then(response => {
      console.log('Exame cadastrado com sucesso', response.data)
      // Limpa os campos do formulário após o cadastro
      setExame({
        codigo: "",
        descricao: "",
        valor: "",
      })

      setLoading(false)
    })
    .catch( error => {
      console.error('Erro ao cadastrar exame:', error)
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
                    <Input
                      key={campo}
                      label={campo}
                      value={exame[campo]}
                      onChange={handleInputChange}
                    />
                  ))}
              </div>

              {/* Botões de cancelar e salvar */}
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={handleCancelar}
                  className="text-sm font-semibold leading-6 text-gray-900  hover:bg-indigo-500 "
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  { loading ? 'Salvando...' : 'Salvar' }
                </button>
              </div>

            </div>
          </div>
        </div>

      </form>
    </>
  )
}

export default FormularioExame