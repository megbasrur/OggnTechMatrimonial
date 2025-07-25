import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import LoginSignup from './components/LoginSignup'

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
