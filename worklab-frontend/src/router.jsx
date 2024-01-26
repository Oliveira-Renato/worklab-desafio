import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Pacientes from './pages/Pacientes'
import Exames from './pages/Exames'
import FormularioPaciente from './pages/FormularioPaciente'

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
    path: 'cadastrar/exames',
    element: ''
  }
])

export default router