import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import './reset.css'

const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <App />}>
    
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router}/>
    </ParallaxProvider>
  </React.StrictMode>,
)
