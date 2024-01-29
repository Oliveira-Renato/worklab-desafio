import { useNavigate } from "react-router-dom";

// Componente funcional ButtonBackMenu
const ButtonBackMenu = () => {
  const navigateTo = useNavigate()
  // Função para navegar de volta à página inicial
  const handleVoltarParaMenu = () => navigateTo('/')

  return (
    <button
      className="bg-tertiary px-4 py-2 text-secondary hover:bg-primary rounded-sm my-2"
      onClick={handleVoltarParaMenu}
    >
      Voltar
    </button>
  )
}

export default ButtonBackMenu;