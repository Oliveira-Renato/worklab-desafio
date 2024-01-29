// Importa hooks necessários e estilos
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from '../utils/styles'

// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";
// Importa componente ButtonBackMenu
import ButtonBackMenu from "../components/ButtonBackMenu";

// Componente funcional Exames
export default function Exames() {
  const navigateTo = useNavigate()
  // Estado para armazenar os exames
  const [exames, setExames] = useState([])

  // Função para voltar para o menu principal
  const handleVoltarParaMenu = () => navigateTo('/')
  // Função para navegar até a página de cadastrar exame
  const handleCadastrarExame = () => navigateTo('/cadastrar/exame')

  // Efeito colateral para carregar a lista de exames ao montar o componente
  useEffect(()=> {
    axiosClient.get('/exames')
    .then(response => {
      setExames(response.data)
    })
    .catch(error => {
      console.error('Erro ao obter lista de exames:', error)
    })
  }, [])

  // Renderiza a estrutura do componente
  return (
    <div>
      {/* Cabeçalho da página */}
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Lista de Exames</h2>
        <p className="text-lg">Lista de exames dos pacientes.</p>
      </div>
      
       {/* Corpo da página */}
      <div className={`${styles.padding}`}>
        {/* Botões de navegação */}
        <div className="flex justify-between my-2">
            <ButtonBackMenu />
            <button
              onClick={handleCadastrarExame}
              className="rounded-md bg-indigo-500 text-[16px] font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-2 md:px-20 sm:px-12"
            >
              Cadastrar Exame
            </button>
        </div>

        {/* Tabela de exames */}
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
               {/* Mapeia os exames e cria linhas na tabela para cada um */}
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
