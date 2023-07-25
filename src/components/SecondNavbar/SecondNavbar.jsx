import React from 'react';
import './SecondNavbar.css'; 

const SecondNavbar = () => {
  return (
    <nav className="second-navbar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Web Apps</li>
        <li>Mobile Apps</li>
        <li>SEO</li>
        <li>Animation</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default SecondNavbar;
