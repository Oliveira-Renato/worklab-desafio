import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Pacientes from './pages/Pacientes'
import Exames from './pages/Exames'
import DefaultLayout from './components/DefaultLayout'
import MenuCadastro from './pages/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/pacientes',
        element: <Pacientes />
      },
      {
        path: '/exames',
        element: <Exames />
      },
    ]
  },
 
  // {
  //   path: '/',
  //   element: <DefaultLayout />,
  //   children: [
  //     {
  //       path: 'paciente',
  //       element: <CadastrarPacientes />
  //     },
  //     {
  //       path: 'exame',
  //       element: <CadastrarExames />
  //     },
  //   ]
  // }
  
])

export default router