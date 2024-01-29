import { useNavigate } from "react-router-dom";

const ButtonBackMenu = () => {
  const handleVoltarParaMenu = () => navigateTo('/')
  const navigateTo = useNavigate()


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