// Importa hooks do React
import { useEffect, useState } from 'react';
// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes necessários
import NavBar from "../components/NavBar";
import ButtonBackMenu from '../components/ButtonBackMenu';

// Componente principal VincularExame
const VincularExame = () => {
  // Estados para controlar dados do formulário e estado de carregamento
  const [numeroAtendimento, setNumeroAtendimento] = useState('');
  const [exames, setExames] = useState([]);
  const [exameSelecionado, setExameSelecionado] = useState('');
  const [loading, setLoading] = useState(false);

  // Manipula a mudança no número de atendimento
  const handleNumeroAtendimentoChange = (e) => {
    let numeroAtendimento = Number(e.target.value);
    numeroAtendimento ? setNumeroAtendimento(numeroAtendimento) : setNumeroAtendimento('')
  };

  // Manipula a seleção de um exame
  const handleExame = (e) =>  {
    setExameSelecionado(e.target.value);
  }

   // Manipula o evento de vinculação do exame
  const handleVincularExame = () => {
    setLoading(true)

    if (numeroAtendimento && exameSelecionado) {
      // Faz uma requisição POST para vincular exame ao paciente
      axiosClient.post(`/paciente/${numeroAtendimento}/exame/${exameSelecionado}`)
        .then(response => {
          console.log('Exame vinculado com sucesso');
          setNumeroAtendimento('')
          setExameSelecionado('');
          setLoading(false)
        })
        .catch(error => {
          console.error('Erro ao vincular exame:', error);
          setNumeroAtendimento('')
          setExameSelecionado('');
          setLoading(false)
        });
    } else {
      console.log('Número de atendimento do paciente ou exame não informado');
    }
  };

  // Efeito para buscar exames cadastrados ao carregar o componente
  useEffect(() => {
    axiosClient.get('/exames')
      .then(response => {
        setExames(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar exames:', error);
      });
  }, []);

  // Renderiza a estrutura do componente
  return (
    <>
      {/* Renderiza a barra de navegação */}
      <NavBar />
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Vincular Exame</h2>
        <p className="md:text-lg sm:text-sm">Registre a associação de exames aos pacientes para manter um histórico preciso.</p>
      </div>

      {/* Renderiza a seção de cabeçalho */}
      <div className="flex flex-col items-center justify-center">
        {/* Renderiza o formulário de vinculação de exame */}
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 align-middle'>
          <div className="sm:col-span-3 flex flex-col">
            <label htmlFor="numeroAtendimento" className="mb-2">
              Número de Atendimento:
            </label>
            <input
              type="text"
              id="numeroAtendimento"
              name="numeroAtendimento"
              value={numeroAtendimento}
              onChange={handleNumeroAtendimentoChange}
              className="p-2 mb-4  rounded-md ring-1 border-gray-300  text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
            />
          </div>
            
          {/* Dropdown para seleção de exame */}
          <div className="sm:col-span-3">
            <label htmlFor="exame" className="mb-2">
              Exame
            </label>
            <div className="mt-2">
              <select
                id="exame"
                name="exame"
                className="block w-full  rounded-md ring-1 border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
                value={exameSelecionado}
                onChange={handleExame}
              >
                <option value=""></option>
                {exames.map((exame) => (
                  <option key={exame.codigo} value={exame.codigo}>
                    {exame.codigo}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
      {/* Botões para navegação e vinculação de exame */}         
       <div className='flex flex-wrap items-center justify-center gap-4 mt-8'>
        {/* Botão para voltar ao menu */}
        <ButtonBackMenu />

        {/* Botão para vincular exame */}
        <button
          onClick={handleVincularExame}
          className="rounded-md bg-indigo-500 text-[16px] font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-2 px-14"
        >
          
          { loading ? 'Vinculando...' : 'Vincular Exame' }
        </button>
       </div>
       
      </div>
    </>
  );
}

export default VincularExame;