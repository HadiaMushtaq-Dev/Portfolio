import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Nav.css"
function Navbar() {
    const location=useLocation()
    const[tab,setTab]=useState(location.pathname)
   
  return (
    <div className='nav'>
      <div className='nav1'>
         <div className='logo'>
          <p>Hadia</p>
         </div>
         <nav>
      <Link to="/" onClick={()=>setTab("/")} className={tab==="/" ? "link":"link1"}>Home</Link>
      <Link to="/About" onClick={()=>setTab("/About")} className={tab==="/About" ? "link":"link1"}>About</Link>
      <Link to="/Projects" onClick={()=>setTab("/Projects")} className={tab==="/Projects" ? "link":"link1"}>Projects</Link>
      <Link to="/Contact" onClick={()=>setTab("/Contact")} className={tab==="/Contact" ? "link":"link1"}>Contact</Link>
         </nav>
      </div>
    </div>
  )
}

export default Navbar
