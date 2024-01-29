import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Pacientes from './pages/Pacientes'
import Exames from './pages/Exames'
import FormularioPaciente from './pages/FormularioPaciente'
import FormularioExame from './pages/FormularioExame'
import Relatorio from './pages/Relatorio'
import VincularExame from './pages/VincularExame'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/pacientes',
        element: <Pacientes />,
      },
      {
        path: '/exames',
        element: <Exames />
      },
    ]
  },
  {
    path: 'cadastrar/paciente',
    element: <FormularioPaciente />
  },
  {
    path: 'cadastrar/exame',
    element: <FormularioExame />
  },
  {
    path: 'relatorio',
    element: <Relatorio />
  },
  {
    path: 'vincular_exame',
    element: <VincularExame />
  }
])

export default router