import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home'
import Login from './component/Login'
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </>
  )
}

export default App
