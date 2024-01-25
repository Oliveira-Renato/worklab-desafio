import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function Pacientes() {
  const [cadastrarPacienteClicked, setCadastrarPacienteClicked] = useState(false);
  const navigateTo = useNavigate()

  const handleCadastrarPacienteClick = () => {
    setCadastrarPacienteClicked(true);
  };

  const handleCancelarClick = () => {
    setCadastrarPacienteClicked(false);
  };

  const handleVoltarParaMenu = () => navigateTo('/')

  useEffect(()=>{

  }, [cadastrarPacienteClicked])
    

  return (
    <div>
      {cadastrarPacienteClicked ? (
        <div>
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
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex justify-between m-auto">
            <button
              className="bg-tertiary px-4 py-2 text-secondary hover:bg-primary rounded-sm my-2"
              onClick={handleVoltarParaMenu}
            >
              Voltar
            </button>

            <button
              onClick={handleCadastrarPacienteClick}
              className="bg-primary px-4 py-2 text-secondary hover:bg-sky-700 rounded-sm my-2"
            >
              Cadastrar Paciente
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50 bg-slate-600">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3">
                        Número de atendimento
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Paciente
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
                    Paulo teste paciente
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
