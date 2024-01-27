import React from "react";
import { NavLink, useLocation  } from "react-router-dom";

const navigation = [
  { name: "Paciente", to: "/pacientes" },
  { name: "Exame", to: "/exames" },
  { name: "Relatorio", to: "/relatorio" },
]

export default function Menu() {
  const location = useLocation();
  const shouldHideMenu = location.pathname !== "/";

  return (
    <div className={`${shouldHideMenu ? 'hidden' : ''}`} >
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Menu Principal</h2>
        <p className="text-lg">Explore as funcionalidades do nosso sistema.</p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-5">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={`text-white font-medium cursor-pointer text-[20px] hover:bg-primary bg-[#1B90C6] w-[140px] h-[140px] rounded-r-sm flex items-center justify-center`
            }
          >
           {item.name}
          </NavLink>
        ))}
      </div>
      
    </div>
  )
}