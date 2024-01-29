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
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* Renderiza a seção de cabeçalho */}
      <div className="flex flex-col items-center justify-center">
        {/* Renderiza o formulário de vinculação de exame */}
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 align-middle'>
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
              className="border p-2 mb-4"
            />
          </div>
            
          {/* Dropdown para seleção de exame */}
          <div className="sm:col-span-3">
            <label htmlFor="exame" className="block text-sm font-medium leading-6 text-gray-900">
              Exame
            </label>
            <div className="mt-2">
              <select
                id="exame"
                name="exame"
                className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
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
       <div className='flex flex-wrap items-center gap-4 m-auto'>
        {/* Botão para voltar ao menu */}
        <ButtonBackMenu />

        {/* Botão para vincular exame */}
        <button
          onClick={handleVincularExame}
          className="bg-primary px-4 py-2 text-secondary hover:bg-sky-700 rounded-sm "
        >
          
          { loading ? 'Vinculando...' : 'Vincular Exame' }
        </button>
       </div>

      </div>
    </>
  );
}

export default VincularExame;