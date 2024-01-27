import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from '../utils/styles'

import axiosClient from "../axios";

export default function Exames() {
  const navigateTo = useNavigate()
  const [exames, setExames] = useState([]) // Estado para armazenar os exames

  const handleVoltarParaMenu = () => navigateTo('/')
  const handleCadastrarExame = () => navigateTo('/cadastrar/exame')

  useEffect(()=> {
    axiosClient.get('/exames')
    .then(response => {
      setExames(response.data)
    })
    .catch(error => {
      console.error('Erro ao obter lista de exames:', error)
    })
  }, [])

  
  return (
    <div>
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Lista de Exames</h2>
        <p className="text-lg">Lista de exames dos pacientes.</p>
      </div>
      
      <div className={`${styles.padding}`}>
        {/* div buttons */}
        <div className="flex justify-between m-auto">
            <button
              className="bg-tertiary px-4 py-2 text-secondary hover:bg-primary rounded-sm my-2"
              onClick={handleVoltarParaMenu}
            >
              Voltar
            </button>

            <button
              onClick={handleCadastrarExame}
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
                {exames.map((exame) => (
                  <tr key={exame.codigo} className="bg-white hover:bg-gray-50">
                    <td scope="row" className="px-6 py-4 font-medium text-tertiary whitespace-nowrap">
                      {exame.codigo}
                    </td>
                    <td className="px-6 py-4 font-medium text-tertiary whitespace-nowrap">
                      {exame.descricao}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 hover:underline">
                        Editar
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
