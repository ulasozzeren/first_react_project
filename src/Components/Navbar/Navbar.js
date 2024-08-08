import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Ulaş's Movie App</h1>
      <ul className="navbar-links">
      <li><Link to="/login">Login    </Link></li>


        <li><Link to="/">Top movies</Link></li>


        
        <li><Link to="/about">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
