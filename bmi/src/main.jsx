import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bmi from './Bmi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Bmi />
  </StrictMode>,
)
