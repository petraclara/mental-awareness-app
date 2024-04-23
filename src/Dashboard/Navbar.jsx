import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
      
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/patient">Patient</Link>
        </li>
        <li>
          <Link to="/therapist">Therapist</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
