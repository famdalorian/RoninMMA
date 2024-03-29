import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
        
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/classes" className="nav-link">
              Classes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Mission" className="nav-link">
              Our Mission
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/timetable" className="nav-link">
              Timetable
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link">
            Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
            Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
