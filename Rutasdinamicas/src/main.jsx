import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Inicio'
import Peliculas from './Peliculas'
import Detalles from './Detalles'
import Favoritos from './Favoritos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path='/peliculas'>
            <Route path="favs" element={<Favoritos />}/>
            <Route path="all" element={<Peliculas />}/>
            <Route path=":id" element={<Detalles />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
