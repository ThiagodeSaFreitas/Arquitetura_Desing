
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './main.css'
import { AppProvider } from './contexts/AppContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>  
  </React.StrictMode>
)
