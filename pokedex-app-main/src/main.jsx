import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Rutas
import Root from './Routes/root'

// CSS


const router = createBrowserRouter([
  {
    // Ruta Raiz
    path: '/',
    element: <Root />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
