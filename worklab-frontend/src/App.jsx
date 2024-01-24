import { Link } from "react-router-dom";
import MenuCadastro from "./pages/MenuCadastro.jsx";

import worklabLog from "./assets/logo-worklab.png";
import { styles } from "./utils/styles.js";

function App() {
  return (
    <div className="w-full h-full">
      <nav className={`${styles.paddingX} bg-primary`}>
        <div>
          <Link
            to={'/'}
            className='flex items-center'
          >
            <img 
              src={worklabLog} 
              alt="Worklab Logo"
              className="w-40 h-20 object-contain" 
            />

          </Link>
        </div>
      </nav>

      <MenuCadastro />
    </div>
  )
}

export default App;