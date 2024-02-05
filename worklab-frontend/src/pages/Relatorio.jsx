// Importa o hook useState do React
import { useState } from 'react';
import toast from "react-hot-toast";
// Importa a instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes necessários
import NavBar from "../components/NavBar";
import ButtonsDefault from "../components/ButtonsDefault";
import { useForm } from "react-hook-form"
import { isEmpty } from 'lodash';

import downloadIcon from '../assets/download.svg'

// Componente principal Relatorio
const Relatorio = () => {
  // Estados para controlar dados do formulário e resultados do relatório
  const { register, handleSubmit, reset } = useForm()
  const [relatorio, setRelatorio] = useState({})
  const [ loading, setLoading ] = useState(false)

  // Realiza uma requisição para obter o relatório com base no número de atendimento
  const handleBuscarRelatorio = async (data) => {
    setLoading(true)
    
    try {
      const { numeroAtendimento } = data

      if(!isEmpty(numeroAtendimento)) {
        const response = await axiosClient.get(`/pacientes/${numeroAtendimento}`)
        setRelatorio(response.data)
      }
    } catch (error) {
      toast.error('Erro ao buscar relatório.')
      console.error('Erro ao buscar relatório:', error);
    }

    reset()
    setLoading(false)
  };

  // Renderiza a estrutura do componente
  return (
    <>
     {/* Renderiza a barra de navegação */}
      <NavBar />

       {/* Renderiza a seção de cabeçalho */}
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Gerar Relatorio</h2>
        <p className="sm:text-sm md:text-lg  ">Obtenha informações detalhadas sobre pacientes e exames para uma análise abrangente.</p>
      </div>

      {/* Renderiza o formulário de busca de relatório */}
      <form onSubmit={handleSubmit(handleBuscarRelatorio)}>
        <div className="flex flex-col items-center">
          {/* Input para número de atendimento */}
          <label htmlFor="numeroAtendimento" className="mb-2">
            Número de Atendimento:
          </label>
          <input
            type="text"
            id="numeroAtendimento"
            {...register('numeroAtendimento')}
            className="p-2 mb-4 rounded-md ring-1 border-gray-300  text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
          />

          {/* Botões para navegação e busca de relatório */}
          <div>
            <ButtonsDefault loading={loading} config={{
              'pTitle': 'Buscar',
              'pLoading': 'Buscando...'
            }} 
            />
          </div>
        </div>
      </form>

      {/* Condição para exibir o relatório se existir */}
      { Object.keys(relatorio).length  ? (
        <div className='flex justify-center '>
          <div className="mt-4 bg-white p-6 rounded-md shadow-md w-fit relative">
            <div className='w-full bg-stone-900 absolute top-0 right-0'>
              <div className='w-full black-gradient rounded-full flex justify-end items-center text-white'>
                <img src={downloadIcon} alt="download icon" className='w-8 h-8 object-contain cursor-pointer m-1' />
              </div>
            </div>
            {/* Exiba as informações do relatório conforme necessário */}
            <h3 className="text-xl font-bold mb-2 mt-10">Relatório do Paciente {relatorio.numero_atendimento}</h3>
            <hr />
            <div className="mb-2">
              <span className="font-bold">Nome Completo:</span> {relatorio.nome_completo}
            </div>
            
            <div className="mb-2">
              <span className="font-bold">Email:</span> {relatorio.email}
            </div>
            
            <div className="mb-2">
              <span className="font-bold">Sexo:</span> {relatorio.sexo === 'M' ? 'Masculino' : 'Feminino'}
            </div>
            
            <div className="mb-2">
              <span className="font-bold">Celular:</span> {relatorio.celular}
            </div>
            <hr />
            <h4 className="text-xl font-bold mb-2">Exames</h4>

            {/* Condição para exibir os exames ou uma mensagem se não houver exames vinculados */}
            { Object.keys(relatorio).length ? (
              <table>
                <thead>
                  <tr>
                    <th className='text-left'>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
              <tbody>
                {relatorio.exames.map((exame)=> (
                  <tr key={exame.codigo}>
                    <td>{exame.codigo} / {exame.descricao}</td>
                    <td>{exame.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            ):(
              <div className="mb-2">
              Nenhum exame vinculado a esse paciente.
              </div>
            )}
          </div>
        </div>
      ): (<></>)}
    </>
  );
}

export default Relatorio;