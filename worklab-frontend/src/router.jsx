import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Pacientes from './pages/Pacientes'
import Exames from './pages/Exames'

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
  }
])

export default router