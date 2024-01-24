import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import CadastrarPacientes from './pages/CadastrarPacientes'
import CadastrarExames from './pages/CadastrarExames'
import DefaultLayout from './components/DefaultLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  // {
  //   path: '/cadastrar/paciente',
  //   element: <CadastrarPacientes />
  // },
  // {
  //   path: '/cadastrar/exame',
  //   element: <CadastrarExames />
  // },
  {
    path: '/cadastrar',
    element: <DefaultLayout />,
    children: [
      {
        path: 'paciente',
        element: <CadastrarPacientes />
      },
      {
        path: 'exame',
        element: <CadastrarExames />
      },
    ]
  }
  
])

export default router