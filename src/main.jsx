import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Must load before App so component CSS modules can override shared classes.
import './global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
