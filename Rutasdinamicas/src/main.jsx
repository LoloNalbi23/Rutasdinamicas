import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Inicio'
import Peliculas from './Peliculas'
import Detalles from './Detalles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="peliculas/all" element={<Peliculas />}/>
          <Route path="peliculas/:id" element={<Detalles />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
