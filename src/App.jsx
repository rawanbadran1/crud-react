import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar.jsx'
import Footer from './component/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Create from './pages/create/Create.jsx'



export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'      element={<Home/>}>  </Route>
      <Route path='/users' element={<Home/>}>  </Route>
      <Route path='/About' element={<About/>}> </Route>
      <Route path='/add'   element={<Create/>}></Route>
    </Routes>
    <Footer/>
    </>
    
  )
}
