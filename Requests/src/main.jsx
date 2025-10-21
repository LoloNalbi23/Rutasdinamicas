import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Requests from './Requests.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Requests />
  </StrictMode>,
)
