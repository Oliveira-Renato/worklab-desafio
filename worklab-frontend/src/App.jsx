import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import CadastrarPacientes from './pages/Pacientes'

function App() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <Menu />
      <Outlet />
    </div>
  )
}

export default App;