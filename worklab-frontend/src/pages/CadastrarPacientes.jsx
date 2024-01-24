export default function CadastrarPacientes() {
  return (
    <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Cadastrar Paciente</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>

           
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              {/* normal input */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome Completo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nome"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>

               {/* normal input */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Endereço de e-mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>


              {/* input select */}
              <div className="sm:col-span-3">
                <label htmlFor="sexo" className="block text-sm font-medium leading-6 text-gray-900">
                  Sexo
                </label>
                <div className="mt-2">
                  <select
                    id="sexo"
                    name="sexo"
                    autoComplete="sexo-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
                  >
                    <option>Masculino</option>
                    <option>Feminino</option>
                  </select>
                </div>
              </div>
              
               {/* normal input */}
              <div className="col-span-full">
                <label htmlFor="celular" className="block text-sm font-medium leading-6 text-gray-900">
                    Celular
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="celular"
                    id="celular"
                    autoComplete="celular"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>

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