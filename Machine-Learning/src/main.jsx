import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Unit1 from './Pages/Unit1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Unit1/>
  </StrictMode>,
)
