import { useState } from 'react';
import axiosClient from "../axios";

import NavBar from "../components/NavBar";
import ButtonBackMenu from '../components/ButtonBackMenu';

const Relatorio = () => {
  const [numeroAtendimento, setNumeroAtendimento] = useState('');
  const [relatorio, setRelatorio] = useState(null);

  const handleNumeroAtendimentoChange = (e) => {
    let numeroAtendimento = Number(e.target.value);
    numeroAtendimento ? setNumeroAtendimento(numeroAtendimento) : setNumeroAtendimento('')
  };

  const handleBuscarRelatorio = () => {
    // Realize uma requisição para obter o relatório com base no número de atendimento
    if(numeroAtendimento) {
      axiosClient.get(`/pacientes/${numeroAtendimento}`)
      .then(response => {
        setRelatorio(response.data);
        console.log(relatorio)
      })
      .catch(error => {
        console.error('Erro ao buscar relatório:', error);
        setRelatorio(null);
      });
    } else {
      console.log('Número de atendimento do paciente não informado')
    }
    
  };
  console.log(relatorio)

  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Gerar Relatorio</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="flex flex-col items-center">
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

       <div className='flex flex-wrap items-center gap-4 m-auto'>
        <ButtonBackMenu />

        <button
          onClick={handleBuscarRelatorio}
          className="bg-primary px-4 py-2 text-secondary hover:bg-sky-700 rounded-sm "
        >
          Buscar Relatório
        </button>
       </div>

        {relatorio && (
          <div className="mt-4 bg-white p-6 rounded-md shadow-md">
            {/* Exiba as informações do relatório conforme necessário */}
            <h3 className="text-xl font-bold mb-2">Relatório do Paciente {numeroAtendimento}</h3>
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
            { relatorio.exames  ? (
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
        )}
      </div>
    </>
  );
}

export default Relatorio;