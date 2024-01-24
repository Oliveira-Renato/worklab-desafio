import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import CadastrarPacientes from './pages/CadastrarPacientes'
import CadastrarExames from './pages/CadastrarExames'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cadastrar/paciente',
    element: <CadastrarPacientes />
  },
  {
    path: '/cadastrar/exame',
    element: <CadastrarExames />
  }
])

export default router