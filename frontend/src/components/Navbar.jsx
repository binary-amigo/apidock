import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import APIPage from '../pages/APIPage/APIPage'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 bg-black text-white sticky top-0'>
      <div className="logo font-extrabold">
        apidock.
      </div>
      <div className="flex nav-links">
        <div className="home mx-6">
            <Link to='/'>Home</Link>
        </div>
        <div className="api mx-6">
            <Link to='/api'>API</Link>
        </div>
      </div>
      <div className="nav-btns">
        <button className=''>Contribute</button>
      </div>
    </div>
  )
}

export default Navbar
