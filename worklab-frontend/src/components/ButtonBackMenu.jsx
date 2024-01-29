import { useNavigate } from "react-router-dom";

// Componente funcional ButtonBackMenu
const ButtonBackMenu = () => {
  const navigateTo = useNavigate()
  // Função para navegar de volta à página inicial
  const handleVoltarParaMenu = () => navigateTo('/')

  return (
    <button
      className="rounded-md bg-red-500 text-[16px] font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-2 px-14"
      onClick={handleVoltarParaMenu}
    >
      Voltar
    </button>
  )
}

export default ButtonBackMenu;