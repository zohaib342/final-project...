import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { CartProvider } from './pages/cardContext.jsx'
createRoot(document.getElementById('root')).render(

    <CartProvider>
    <App />
  </CartProvider>
  
  
)
