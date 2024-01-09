import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="/home">Home</a></li>
        <li><a href="/booking">Booking</a></li>
        <li><a href="/employeemgmt">Employee Management</a></li>
        <li><a href="/guestmgmt">Guest Management</a></li>
        <li><a href="/servicesmgmt">Services Management</a></li>
        <li><a href="/">Sign Out</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
