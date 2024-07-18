import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import APIPage from './pages/APIPage/APIPage'

const App = () => {
  return (
    <div className='bg-[#613583] w-screen h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/api' element={<APIPage/>}/>
      </Routes>
    </div>
  )
}

export default App
