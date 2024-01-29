// Importa o hook useState do React
import { useState } from 'react';
// Importa a instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes necessários
import NavBar from "../components/NavBar";
import ButtonBackMenu from '../components/ButtonBackMenu';

// Componente principal Relatorio
const Relatorio = () => {
   // Estados para controlar dados do formulário e resultados do relatório
  const [numeroAtendimento, setNumeroAtendimento] = useState('');
  const [relatorio, setRelatorio] = useState({});

  // Manipula a mudança no número de atendimento
  const handleNumeroAtendimentoChange = (e) => {
    let numeroAtendimento = Number(e.target.value);
    numeroAtendimento ? setNumeroAtendimento(numeroAtendimento) : setNumeroAtendimento('')
  };

  // Realiza uma requisição para obter o relatório com base no número de atendimento
  const handleBuscarRelatorio = () => {
    if(numeroAtendimento) {
      axiosClient.get(`/pacientes/${numeroAtendimento}`)
      .then(response => {
        setRelatorio(response.data);
        setNumeroAtendimento('')
      })
      .catch(error => {
        console.error('Erro ao buscar relatório:', error);
        // setRelatorio({});
      });
    } else {
      console.log('Número de atendimento do paciente não informado')
    }
    
  };

  // Renderiza a estrutura do componente
  return (
    <>
     {/* Renderiza a barra de navegação */}
      <NavBar />

       {/* Renderiza a seção de cabeçalho */}
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Gerar Relatorio</h2>
        <p className="text-lg"> obtenha informações detalhadas sobre pacientes e exames para uma análise abrangente.</p>
      </div>

      {/* Renderiza o formulário de busca de relatório */}
      <div className="flex flex-col items-center">
        {/* Input para número de atendimento */}
        <label htmlFor="numeroAtendimento" className="mb-2">
          Número de Atendimento:
        </label>
        <input
          type="text"
          id="numeroAtendimento"
          name="numeroAtendimento"
          value={numeroAtendimento}
          onChange={handleNumeroAtendimentoChange}
          className="p-2 mb-4 rounded-md ring-1 border-gray-300  text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
        />

        {/* Botões para navegação e busca de relatório */}
       <div className='flex flex-wrap items-center gap-4 m-auto'>
        {/* Botão para voltar ao menu */}
        <ButtonBackMenu />

        {/* Botão para buscar relatório */}
        <button
          onClick={handleBuscarRelatorio}
          className="bg-primary px-4 py-2 text-secondary hover:bg-sky-700 rounded-sm"
        >
          Buscar Relatório
        </button>
       </div>

        {/* Condição para exibir o relatório se existir */}
        { Object.keys(relatorio).length  ? (
          <div className="mt-4 bg-white p-6 rounded-md shadow-md w-fit">
            {/* Exiba as informações do relatório conforme necessário */}
            <h3 className="text-xl font-bold mb-2">Relatório do Paciente {relatorio.numero_atendimento}</h3>
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
        ): (<></>)}
      </div>
    </>
  );
}

export default Relatorio;