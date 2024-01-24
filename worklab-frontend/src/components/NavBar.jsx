import { Link, NavLink } from "react-router-dom";
import { styles } from "../utils/styles.js";
import { navLinks } from "../constants/index.js";
import worklabLog from "../assets/logo-worklab.png";

export default function NavBar() {
  return (
    <nav className={`${styles.paddingX} bg-primary w-full flex items-center fixed top-0 z-20`}>
        <div className="w-full flex justify-between items-center text-white  max-w-8xl mx-auto">
          <Link
            to={'/'}
            className={`flex items-center`}
          >
            <img 
              src={worklabLog} 
              alt="Worklab Logo"
              className="w-40 h-20 object-contain" 
            />
          </Link>
          
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`text-white font-medium cursor-pointer text-[16px] hover:bg-sky-700 p-2 rounded-sm transition-all`}
              >
                <NavLink
                  to={link.rota}
                  className={'hover:black'}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          
        </div>
    </nav>
  )
}