import React from "react";
import { useNavigate } from "react-router-dom";
import { styles } from '../utils/styles'

const Pacientes = () => {
  const navigateTo = useNavigate()

  const handleVoltarParaMenu = () => navigateTo('/')
  const handleCadastrarPaciente = () => navigateTo('/cadastrar/paciente')

  return (
    <div>
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Lista de Pacientes</h2>
        <p className="text-lg">Lista de pacientes cadastrados  no sistema.</p>
      </div>  

      <div className={`${styles.padding}`} >
        <div className={` flex justify-between m-auto`} >
          <button
            className="bg-tertiary px-4 py-2 text-secondary hover:bg-primary rounded-sm my-2"
            onClick={handleVoltarParaMenu}
          >
            Voltar
          </button>

          <button
            onClick={handleCadastrarPaciente}
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
                      Atendimento
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
    </div>
  );
}


export default Pacientes;