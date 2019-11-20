import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './navbar.css';
//import '../layout/Layout.css';
const Navbar = () => {
  
  return (     
    <div className="navbar">
      <div className="nav navbar-nav">
        <span>Beer-Celler</span>
        <ul className="nav">
          <Link to="/form">Form</Link>
          <Link to="/">Home</Link>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Navbar);
