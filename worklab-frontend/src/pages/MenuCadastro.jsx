import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navigation = [
  { name: "Paciente", to: "/cadastrar/paciente" },
  { name: "Exame", to: "/cadastrar/exame" },
]


export default function MenuCadastro() {
  return (
    <div className="h-full flex justify-center items-start">
      <div className="flex flex-wrap">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={"bg-gray-800 p-2 m-4"}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}