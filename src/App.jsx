
import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import ViewProject from './pages/ViewProject'
import AboutMe from './pages/AboutMe'
import Footer from './component/Footer'

function App() {


  return (
    <>
      <div className='bg-gradient-to-b from-emerald-950 from-10% to-emerald-700'>
          <Hero/>
      </div>
      <div>
          <ViewProject/>
      </div>
      <div>
          <AboutMe/>
      </div>
      <div className='fixed w-full top-0' >
            <Navbar/>
      </div>
      <Footer/>
    </>
  )
}

export default App
