import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
function App(){ return <Home /> }
createRoot(document.getElementById('root')).render(<App />)
