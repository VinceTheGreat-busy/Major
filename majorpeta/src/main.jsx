import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './layouts/navigation.jsx'
import Cardds from './card.jsx'

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Nav />
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cardds />
  </StrictMode>,
)

createRoot(document.getElementById('footer')).render(
  <StrictMode>
    <footer>
      <p>&copy; 2024 The Comfort Blend. All rights reserved.</p>
    </footer>
  </StrictMode>,
)