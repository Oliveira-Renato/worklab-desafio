import React from "react";
import { NavLink, useLocation  } from "react-router-dom";

const navigation = [
  { name: "Paciente", to: "/pacientes" },
  { name: "Exame", to: "/exames" },
]


export default function Menu() {
  const location = useLocation();
  const shouldHideMenu = location.pathname !== "/";

  return (
    <div className={`${shouldHideMenu ? 'hidden' : ''} flex justify-center items-start mt-20`} >
      <div className="flex flex-wrap gap-5">
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