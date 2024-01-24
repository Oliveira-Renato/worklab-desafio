import React, { useState } from "react";
import CadastrarPacientes from "./CadastrarPacientes";

export default function Pacientes() {
  const [cadastrarPacienteClicked, setCadastrarPacienteClicked] = useState(false);

  const handleCadastrarPacienteClick = () => {
    setCadastrarPacienteClicked(true);
  };

  return (
    <div className={`mt-20 px-16`}>
      {cadastrarPacienteClicked ? (
        <div>
          <CadastrarPacientes />
        </div>
      ) : (
        <div className={`mt-20 px-16`}>
          <div>
            <button
              onClick={handleCadastrarPacienteClick}
              className="bg-primary px-4 py-2 text-secondary hover:bg-sky-700 rounded-sm my-2"
            >
              Cadastrar Paciente
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50">
              {/* ... Table headers ... */}
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
