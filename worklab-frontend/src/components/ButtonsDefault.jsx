import ButtonBackMenu from "./ButtonBackMenu";

// Componente funcional ButtonsDefault
const ButtonsDefault = ({loading, config={pTitle: '', pLoading: ''}}) => {
  const { pTitle, pLoading } = config

  return (
    <div className="mt-6 flex items-center justify-between flex-wrap gap-2">
      {/* Botão para cancelar a operação */}
      <ButtonBackMenu />

      {/* Botão para enviar o formulário */}
      <button
        type="submit"
        className="rounded-md bg-indigo-600  text-[16px] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-2 md:px-20 px-10  my-2"
      >
        { loading ? ( pLoading || 'Salvando...') :  ( pTitle || 'Salvar') }
      </button>
    </div>
  )
}

export default ButtonsDefault;