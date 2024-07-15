
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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Button className='hero-button' text="Contact Me" />
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
