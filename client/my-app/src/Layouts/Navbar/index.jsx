import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Navbar() {
  return (
    <nav>
        <div className='navDiv'>
            <div className='navLogo'>
                 <img src="https://1000logos.net/wp-content/uploads/2020/07/Jacobs-Logo.png" alt="" />
            </div>
            <div className='navList'>
                <ul>
                   <Link to={"/"}><li>Home</li></Link> 
                  <Link to={"/add"}><li>Add</li></Link> 
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar