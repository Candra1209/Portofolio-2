import React from 'react'
import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Outlet } from "react-router-dom";


function App() {


  return (
    <>
      <div className='bg-gradient-to-b from-emerald-950 from-10% to-emerald-700'>
          <Hero/>
      </div>

      <div>
        <Outlet/>
      </div>

      <div className='fixed w-full top-0' >
            <Navbar/>
      </div>
      <Footer/>
    </>
  )
}

export default App
