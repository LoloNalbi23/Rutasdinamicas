import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import Requests from './Requests.jsx'
import Perros from './Perros.jsx'
import Inicio from './Inicio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path= '/perros' element={<Perros />}></Route>
          <Route path='/paises/:nombre' element={<Requests />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
