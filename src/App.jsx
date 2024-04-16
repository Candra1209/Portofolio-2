import React from 'react'
import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Outlet } from "react-router-dom";


function App() {


  return (
    <>

      <div>
        <Outlet/>
      </div>

      <div className='fixed w-svw top-0' >
            <Navbar/>
      </div>
      <div className='absolute w-full'>
        <Footer/>
      </div>
    </>
  )
}

export default App
