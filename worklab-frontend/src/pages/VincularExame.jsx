// Importa hooks do React
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
// Importa instância do cliente Axios personalizada
import axiosClient from "../axios";

// Importa componentes necessários
import NavBar from "../components/NavBar";
import ButtonBackMenu from '../components/ButtonBackMenu';
import ButtonsDefault from '../components/ButtonsDefault';

// Componente principal VincularExame
const VincularExame = () => {
  const { register, handleSubmit, reset } = useForm()
  // Estados para controlar dados do formulário e estado de carregamento
  const [exames, setExames] = useState([]);
  const [loading, setLoading] = useState(false);

   // Manipula o evento de vinculação do exame
  const handleVincularExame = async (data) => {
    setLoading(true)

    try {
      const { numeroAtendimento, exame } = data;

      if (!numeroAtendimento) {
        throw new Error('Número do paciente não informado.');
      }

      if (!exame) {
        throw new Error('Exame não informado.');
      }

      const response = await axiosClient.post(`/paciente/${numeroAtendimento}/exame/${exame}`)
      alert('Exame vinculado com sucesso', response.data)

    } catch (error) {
      alert(error.message)
      console.log('Erro ao vincular exame:', error)
    }

    reset()
    setLoading(false)
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
        <form onSubmit={handleSubmit(handleVincularExame)}>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 align-middle'>
            <div className="sm:col-span-3 flex flex-col">
              <label htmlFor="numeroAtendimento" className="mb-2">
                Número de Atendimento:
              </label>
              <input
                type="text"
                id="numeroAtendimento"
                {...register('numeroAtendimento')}
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
                  {...register('exame')}
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
          <ButtonsDefault loading={loading} config={{
            'pLoading': 'Vinculando...',
            'pTitle' : 'Vincular Exame'
          }}
          />
        </form>
      </div>
    </>
  );
}

export default VincularExame;