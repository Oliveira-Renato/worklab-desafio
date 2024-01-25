import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { styles } from "./utils/styles.js"


function App() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Menu />
      <Outlet />
    </div>
  )
}

export default App;