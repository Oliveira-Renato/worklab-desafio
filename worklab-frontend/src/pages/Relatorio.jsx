// Importa o hook useState do React
import { useState } from 'react';
import toast from "react-hot-toast";
import { usePDF } from 'react-to-pdf';
// Importa a instância do cliente Axios personalizada
import axiosClient from "../axios";
import worklabLogo from "../assets/logo-worklab.png"
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
  const { toPDF, targetRef } = usePDF({filename: 'exame.pdf'});

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
        <div className='flex justify-center'>
          <div className="mt-4 bg-white p-4 rounded-md shadow-md w-fit relative">
            {/* DOWNLOAD PDF */}
            <div className='w-full bg-stone-900 absolute top-0 right-0'>
              <div className='w-full black-gradient rounded-full flex justify-end items-center text-white'>
                <img 
                  onClick={() => toPDF()} 
                  src={downloadIcon} alt="download icon" className='w-8 h-8 object-contain cursor-pointer m-1' 
                />
              </div>
            </div>
            {/* Exiba as informações do relatório conforme necessário */}
            <div ref={targetRef} className="w-[794px] h-auto bg-white p-6 border border-gray-300 rounded-md shadow-md">
              <div>
                {/* CABEÇALHO RELATÓRIO */}
                <header className="mb-6 border-t border-b border-t-0 border-gray-300 flex justify-between">
                  <h3 className="text-xl font-bold mb-2 mt-2 text-gray-900">Número de Atendimento:{' '}
                    <span className='text-gray-800 font-normal'>{relatorio.numero_atendimento}</span>
                  </h3>
                  <div className='w-10 h-10'>
                    <img src={worklabLogo} alt="Worklab logo"  />
                  </div>
                </header>
                {/* INFORMAÇÕES PESSOAIS SECTION */}
                <section className="mb-6 text-gray-900 border-b border-t-0 border-gray-300">
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
                </section>

                {/* EXAMES SECTION */}
                <section className="mb-6 text-gray-900 border-b border-t-0 border-gray-300">
                  <h4 className="text-xl font-bold mb-4">Exames</h4>
                  {/* Condição para exibir os exames ou uma mensagem se não houver exames vinculados */}
                  {Object.keys(relatorio.exames).length ? (
                    <table className="w-full border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="py-2 px-4 border-r text-left">Descrição</th>
                          <th className="py-2 px-4 text-left">Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {relatorio.exames.map((exame) => (
                          <tr key={exame.codigo} className="border-t">
                            <td className="py-2 px-4">{exame.codigo} / {exame.descricao}</td>
                            <td className="py-2 px-4">{exame.valor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="mb-2">
                      Nenhum exame vinculado a esse paciente.
                    </div>
                  )}
                </section>

                {/* Róda pé do relatório */}
                <footer className="text-center text-sm text-gray-500">
                  Este é um relatório gerado automaticamente.
                </footer>
              </div>
            </div>


            

          </div>
        </div>
      ): (<></>)}
    </>
  );
}

export default Relatorio;