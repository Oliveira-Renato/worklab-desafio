import Input from "../components/Input";

export default function CadastrarExames() {
  return (
    <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Cadastrar Exame</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>

           
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              {/* normal input */}
              <Input name={"Descrição"} />

              {/* normal input */}
              <Input name={"Valor"} />

            </div>

          </div>
        </div>

       {/* buttons */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
        </div>
      </form>
  )
}