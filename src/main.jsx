import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';

import App from './App.jsx'
import './index.css'
import './reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
)
