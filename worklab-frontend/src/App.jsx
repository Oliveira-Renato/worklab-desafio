import CadastrarExames from "./pages/CadastrarExames";
import CadastrarPacientes from "./pages/CadastrarPacientes";

 function App() {
  return (
    <div className="w-full h-full">
      {/* <CadastrarPacientes  /> */}
      <div className="h-full flex justify-center items-start">
        <div className="flex flex-wrap">
          <button>Cadastrar Paciente</button>
          <button>Cadastrar Exame</button>
        </div>
      </div>
      {/* <CadastrarExames /> */}
    </div>
  )
}

export default App;