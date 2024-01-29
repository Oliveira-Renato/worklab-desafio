import { useNavigate } from "react-router-dom";

// Componente funcional ButtonsDefault
const ButtonsDefault = ({loading}) => {
  const navigateTo = useNavigate()

  // Função para navegar de volta à página inicial
  const handleCancelar = () => navigateTo('/')

  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      {/* Botão para cancelar a operação */}
      <button
        type="button"
        onClick={handleCancelar}
        className="text-sm font-semibold leading-6 text-gray-900  hover:bg-indigo-500 "
      >
        Cancelar
      </button>

      {/* Botão para enviar o formulário */}
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        { loading ? 'Salvando...' : 'Salvar' }
      </button>
    </div>
  )
}

export default ButtonsDefault;