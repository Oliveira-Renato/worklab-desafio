import { useEffect, useState } from 'react';
import axiosClient from "../axios";

import NavBar from "../components/NavBar";
import ButtonBackMenu from '../components/ButtonBackMenu';

const VincularExame = () => {
  const [numeroAtendimento, setNumeroAtendimento] = useState('');
  const [exames, setExames] = useState([]);
  const [exameSelecionado, setExameSelecionado] = useState('');

  const handleNumeroAtendimentoChange = (e) => {
    let numeroAtendimento = Number(e.target.value);
    numeroAtendimento ? setNumeroAtendimento(numeroAtendimento) : setNumeroAtendimento('')
  };

  const handleExame = (e) =>  {
    setExameSelecionado(e.target.value);
  }

  const handleVincularExame = () => {
    if (numeroAtendimento && exameSelecionado) {
      axiosClient.post(`/pacientes/${numeroAtendimento}/exame/${exameSelecionado}`)
        .then(response => {
          console.log('Exame vinculado com sucesso');
        })
        .catch(error => {
          console.error('Erro ao vincular exame:', error);
        });
    } else {
      console.log('Número de atendimento do paciente ou exame não informado');
    }
  };

  useEffect(() => {
    // Buscar exames cadastrados ao carregar o componente
    axiosClient.get('/exames')
      .then(response => {
        setExames(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar exames:', error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Vincular Exame</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="flex flex-col items-center justify-center">

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
        


       <div className='flex flex-wrap items-center gap-4 m-auto'>
        <ButtonBackMenu />

        <button
          onClick={handleVincularExame}
          className="bg-primary px-4 py-2 text-secondary hover:bg-sky-700 rounded-sm "
        >
          Vincular Exame
        </button>
       </div>

      </div>
    </>
  );
}

export default VincularExame;