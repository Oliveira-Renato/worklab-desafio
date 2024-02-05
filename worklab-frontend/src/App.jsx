import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar.jsx";

// Importa o componente Outlet do pacote "react-router-dom" para renderização de rotas aninhadas
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Menu />
      {/* Renderiza o ponto de saída (Outlet) para rotas aninhadas */}
      <Outlet />
    </div>
  )
}

export default App;