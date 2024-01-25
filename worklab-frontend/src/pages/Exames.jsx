import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";

export default function Exames() {
  const navigateTo = useNavigate()
  const [cadastrarExameClicked, setCadastrarExameClicked] = useState(false);

  const handleCadastrarExameClick = () => {
    setCadastrarExameClicked(true);
  };

  const handleCancelarClick = () => {
    setCadastrarExameClicked(false);
  };

  const handleVoltarParaMenu = () => navigateTo('/')

  useEffect(()=>{

  }, [cadastrarExameClicked])
    

  return (
    <div>
      {cadastrarExameClicked ? (
        //formulario para cadastro de exame
        <div>
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
                  <h2 className="text-3xl font-bold mb-2">Cadastro de Exames</h2>
                  <p className="text-lg">Registre os resultados dos exames para uma gestão precisa da saúde dos pacientes.</p>
                </div>

              
                <div className="w-full">
                  {/* normal input */}
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <Input name={"Descrição"} />
                    {/* normal input */}
                      <Input name={"Valor"} />
                  </div>
                </div>

              </div>
            </div>

            {/* buttons */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                onClick={handleCancelarClick}
                className="text-sm font-semibold leading-6 text-gray-900  hover:bg-indigo-500 "
              >
                Cancelar
              </button>

                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Salvar
              </button>
            </div>
          </form>
        </div>
      ) : (
        //tabela de exames
        <div>
          <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
            <h2 className="text-3xl font-bold mb-2">Lista de Exames</h2>
            <p className="text-lg">Lista de exames dos pacientes.</p>
          </div>
          {/* div buttons */}
          <div className="flex justify-between m-auto">
            <button
              className="bg-tertiary px-4 py-2 text-secondary hover:bg-primary rounded-sm my-2"
              onClick={handleVoltarParaMenu}
            >
              Voltar
            </button>

            <button
              onClick={handleCadastrarExameClick}
              className="bg-primary px-4 py-2 text-secondary hover:bg-sky-700 rounded-sm my-2"
            >
              Cadastrar Exame
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50 bg-slate-500">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3">
                      Descrição
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Valor
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Editar</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50">
                  <td scope="row" className="px-6 py-4 font-medium text-tertiary whitespace-nowrap">
                    1234
                  </td>
                  <td className="px-6 py-4 font-medium text-tertiary whitespace-nowrap">
                    Hemo
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                      Editar
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
