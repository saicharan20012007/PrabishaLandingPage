import React from 'react';
import './Navbar.css'; 

import indiaFlag from "../../img/india.png"; 
import usaFlag from "../../img/usa.png"; 
import skypeLogo from "../../img/skype.png"; 
import emailLogo from "../../img/mail.png"; 

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="left-section">
            <div className="country-info">
              <img src={indiaFlag} alt="India Flag" />
              <span>+91 (India)</span>
            </div>
            <div className="country-info">
              <img src={usaFlag} alt="USA Flag" />
              <span>+1 (USA)</span>
            </div>
            <div className="contact-info">
              <img src={skypeLogo} alt="Skype" />
              <span>skype_id</span>
            </div>
            <div className="contact-info">
              <img src={emailLogo} alt="Email" />
              <span>email_id@example.com</span>
            </div>
          </div>
          <div className="right-section">
            <button className="orange-button">Get Free Consulation</button>
          </div>
        </nav>
      );
    };
export default Navbar;
