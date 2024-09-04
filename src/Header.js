// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/papers">Papers</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
