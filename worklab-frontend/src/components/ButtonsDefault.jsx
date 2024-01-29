import ButtonBackMenu from "./ButtonBackMenu";

// Componente funcional ButtonsDefault
const ButtonsDefault = ({loading}) => {
  return (
    <div className="mt-6 flex items-center justify-between flex-wrap">
      {/* Botão para cancelar a operação */}
      <ButtonBackMenu />

      {/* Botão para enviar o formulário */}
      <button
        type="submit"
        className="rounded-md bg-indigo-600  text-[16px] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-2 px-20  my-2"
      >
        { loading ? 'Salvando...' : 'Salvar' }
      </button>
    </div>
  )
}

export default ButtonsDefault;