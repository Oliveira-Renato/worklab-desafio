import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from '../utils/styles'

import axiosClient from "../axios";
import ButtonBackMenu from "../components/ButtonBackMenu";

const Pacientes = () => {
  const navigateTo = useNavigate()
  const [pacientes, setPacientes] = useState([]) // Estado para armazenar os pacientes

  const handleCadastrarPaciente = () => navigateTo('/cadastrar/paciente')

  useEffect(() => {
    // UseEffect para buscar dados de pacientes ao montar o componente
    axiosClient.get('/pacientes')
      .then(response => {
        setPacientes(response.data)
      })
      .catch(error => {
        console.error('Erro ao obter lista de pacientes:', error)
      })
  }, [])

  return (
    <div>
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Lista de Pacientes</h2>
        <p className="text-lg">Lista de pacientes cadastrados  no sistema.</p>
      </div>  

      <div className={`${styles.padding}`} >
        <div className={` flex justify-between m-auto`} >
          <ButtonBackMenu />
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
                     Numero Atendimento
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Paciente
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <span className="sr-only">ver</span>
                  </th>
                </tr>
              </thead>
            <tbody>
              {/* Mapeia os pacientes e cria linhas na tabela para cada um */}
              {pacientes.map((paciente) => (
                <tr key={paciente.numero_atendimento} className="bg-white hover:bg-gray-50">
                  <td scope="row" className="px-6 py-4 font-medium text-tertiary whitespace-nowrap">
                    {paciente.numero_atendimento}
                  </td>
                  <td className="px-6 py-4 font-medium text-tertiary whitespace-nowrap">
                    {paciente.nome_completo}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                      Visualizar
                    </a>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}


export default Pacientes;