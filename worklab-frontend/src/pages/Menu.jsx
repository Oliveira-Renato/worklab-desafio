// Importa React e hooks necessários
import React from "react";
import { NavLink, useLocation  } from "react-router-dom";

// Define as opções de navegação
const navigation = [
  { name: "Paciente", to: "/pacientes", color: "#3498DB" },
  { name: "Exame", to: "/exames", color: "#2ECC71" },
  { name: "Vincular Exame", to: "/vincular_exame", color: "#f56565"},
  { name: "Relatorio", to: "/relatorio", color: "#667eea" },
]

// Componente Menu
export default function Menu() {
   // Obtém a localização atual da rota
  const location = useLocation();
  // Verifica se o menu deve ser ocultado com base na localização atual
  const shouldHideMenu = location.pathname !== "/";

  // Renderiza a estrutura do componente
  return (
    <div className={`${shouldHideMenu ? 'hidden' : ''}`} >
       {/* Cabeçalho do menu */}
      <div className="w-full flex flex-col items-center bg-gray-200 p-4 text-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-2">Menu Principal</h2>
        <p className="text-lg">Explore as funcionalidades do nosso sistema.</p>
      </div>

      {/* Opções de navegação */}
      <div className="flex justify-center items-center flex-wrap gap-5">
        {navigation.map((item) => (
          // Utiliza NavLink para criar links de navegação com estilos ativos
          <NavLink
            key={item.name}
            to={item.to}
            className={`text-white font-medium cursor-pointer text-[20px] hover:bg-primary bg-[${item.color}] w-[160px] h-[160px] rounded-r-sm flex items-center justify-center`}
          >
           {item.name}
          </NavLink>
        ))}
      </div>
      
    </div>
  )
}