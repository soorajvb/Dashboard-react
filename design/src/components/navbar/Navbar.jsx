import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import down from '../../assets/down.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import user from '../../assets/user.png'


const Navbar = () => {
  return (
    <>
    <nav>
        <div class="logo">
            <img src={logo} alt="" />
        </div>
        <div class="search">
            <div class="category">
                <a href="">All category</a> 
                <img src={down} alt="" />
            </div>
            <input type="search" placeholder="Search here..." />
            <img src={search} alt="" />
        </div>
        <div class="navbar">
            <ul>
                <li>DASHBOARD</li>
                <li>MY WORK</li>
                <li>Contract</li>
                <li>
                  <img src={bell} alt="" />
                  </li>
                  <li>
                  <img src={user}alt="" />
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
