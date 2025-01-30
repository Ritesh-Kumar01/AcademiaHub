// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"

import './index.css'
import Navbar from './Components/Navbar/Navbar'

import Dashboard from './Components/Dashboard/Dashboard';
import { AuthProvider } from "./contexts/authContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>


    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
         
      </Routes>
    </Router>
    </AuthProvider>
  </React.StrictMode>,
)