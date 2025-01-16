import React from 'react';
import './HeroSection.css';
import graduationImage from '../assets/graduates.png';  // Place your image in /src/assets and rename accordingly

function HeroSection() {
  return (
    <div className="hero">
      <img src={graduationImage} alt="Graduation" className="hero-image" />
      {/* <div className="content">
        <h1>Education for a Brighter Tomorrow</h1>
        <p>
          EduNova University, a leading hub for academic excellence and innovation. 
          Empowering students with the knowledge, skills, and values they need to excel.
        </p>
      </div> */}
    </div>
  );
}

export default HeroSection;
