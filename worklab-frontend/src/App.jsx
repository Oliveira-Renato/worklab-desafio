import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { styles } from "./utils/styles.js"


function App() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <div className={`${styles.padding}`}>
        <Menu />
        <Outlet />
      </div>
    </div>
  )
}

export default App;