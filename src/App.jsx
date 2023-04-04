import React from 'react'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      
    {/* <BrowserRouter> */}
      <Navbar/>
      <Header/>
      <Portfolio/>
      {/* <div className="position-fixed z-3">
          <a href="">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div> */}
      <About/>
      <Contact/>
      {/* <Routes> */}
        {/* <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} /> */}
      {/* </Routes>      
    </BrowserRouter> */}
    <Footer/>
    </>
  )
}
