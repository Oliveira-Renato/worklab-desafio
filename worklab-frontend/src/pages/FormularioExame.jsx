import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import axiosClient from "../axios";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { styles } from '../utils/styles'

const FormularioExame = () => {
  const navigateTo = useNavigate()
  const [ loading, setLoading ] = useState(false)
  const [exame, setExame] = useState({
    codigo: "",
    descricao: "",
    valor: "",
    paciente_numero_atendimento: ""
  })

  const handleCancelar = () => navigateTo('/')

  const handleInputChange = (campo, valor) => {
    setExame((prevExame) => ({...prevExame, [campo]: valor}))
  }

  const handleSalvar = (e) => {
    e.preventDefault()
    setLoading(true)

    //enviar para backend
    axiosClient.post('/exames', exame)
    .then(response => {
      console.log('Exame cadastrado com sucesso', response.data)
      setExame({
        codigo: "",
        descricao: "",
        valor: "",
        paciente_numero_atendimento: ""
      })

      setLoading(false)
    })
    .catch( error => {
      console.error('Erro ao cadastrar exame:', error)
      setLoading(false)
    })
  }
  
  return (
    <>
      <NavBar />
      <form onSubmit={handleSalvar}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
                  <h2 className="text-3xl font-bold mb-2">Cadastro de Exames</h2>
                  <p className="text-lg">Registre os resultados dos exames para uma gestão precisa da saúde dos pacientes.</p>
                </div>

              
                <div className={`${styles.padding} w-full`}>
                  {/* normal input */}
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                     {/* Renderização  dinamica de inputs */}
                      {['codigo','descricao', 'valor', 'paciente_numero_atendimento'].map((campo) => (
                        <Input
                          key={campo}
                          label={campo}
                          value={exame[campo]}
                          onChange={handleInputChange}
                        />
                      ))}
                  </div>

                  {/* buttons */}
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