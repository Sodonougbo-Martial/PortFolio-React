
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './styles.css'; 



function Navbar() {
  return (
    <nav className="navbar">
      <Link className='nav-links1' to="/">Home</Link>

      <ul className="nav-links">
        <li>
          <Link to="/projects"> Projects </Link>
        </li>
        <li>
          <Link to="/contact"><Button className='hero-button' text="Contact Me" /></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
