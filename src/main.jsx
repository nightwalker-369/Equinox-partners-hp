import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Design tokens + global styles (order matters: tokens → DS base → site)
import './styles/colors_and_type.css'
import './styles/ds-styles.css'
import './styles/site.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
