import React from 'react';
import './Intro.css'; 
import backgroundImage from "../../img/back.png"; 

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="intro-content">
        <h1>Welcome to Prabisha Consulting</h1>
        <p>
        Here, we transform ideas into stunning digital solutions. 
        </p>
        <p>
        Our team of experts crafts bespoke websites, web applications, and mobile applications<br /> that captivate users and drive business growth. With a focus on SEO-friendly design,<br /> we ensure your online presence stands out from the crowd. 
        </p>
        <p>
        Get ready to elevate your business to new heights with our cutting-edge technology and <br />innovative solutions.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Intro;
