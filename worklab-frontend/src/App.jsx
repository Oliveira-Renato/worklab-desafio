import { Link, NavLink } from "react-router-dom";
import MenuCadastro from "./pages/MenuCadastro.jsx";

import worklabLog from "./assets/logo-worklab.png";
import { styles } from "./utils/styles.js";
import { navLinks } from "./constants/index.js";

function App() {
  return (
    <div className="w-full h-full">
      <nav className={`${styles.paddingX} bg-primary w-full flex items-center fixed top-0 z-20`}>
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
          
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.rota}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          
        </div>
      </nav>

      <MenuCadastro />
    </div>
  )
}

export default App;