// Importa React, hooks necessários e estilos
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from '../utils/styles'

// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";
// Importa componente ButtonBackMenu
import ButtonBackMenu from "../components/ButtonBackMenu";

// Componente principal Pacientes
const Pacientes = () => {
  // Hook de navegação do React Router
  const navigateTo = useNavigate()
  // Estado para armazenar os pacientes
  const [pacientes, setPacientes] = useState([]) 
 // Função para navegar até a página de cadastro de paciente
  const handleCadastrarPaciente = () => navigateTo('/cadastrar/paciente')

  // Efeito para buscar dados de pacientes ao montar o componente
  useEffect(() => {
    axiosClient.get('/pacientes')
      .then(response => {
        setPacientes(response.data)
      })
      .catch(error => {
        console.error('Erro ao obter lista de pacientes:', error)
      })
  }, [])

  console.log('RENDER PACIENTES')
  // Renderiza a estrutura do componente
  return (
    <div>
      {/* Cabeçalho da página */}
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Lista de Pacientes</h2>
        <p className="text-lg">Lista de pacientes cadastrados  no sistema.</p>
      </div>  

      {/* Área central da página */}
      <div className={`${styles.padding}`} >
        <div className={` flex justify-between my-2`} >
          {/* Botão para voltar ao menu */}
          <ButtonBackMenu />

          {/* Botão para cadastrar novo paciente */}
          <button
            onClick={handleCadastrarPaciente}
            className="rounded-md bg-indigo-500 text-[16px] font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-2 md:px-20 sm:px-12"
          >
            Cadastrar Paciente
          </button>
        </div>

         {/* Tabela de pacientes */}
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