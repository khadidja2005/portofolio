import React from 'react'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Projects from './Routes/Projects'
import About from './Routes/About'
import Contact from './Routes/Contact'

function App() {
  return (
  <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
  </>
  )
}

export default App
