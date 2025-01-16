import React from 'react';
import './ScholarshipSection.css'; // External CSS for styling
import backgroundImage from '../assets/scholarship-background.jpeg'; // Replace with your image path

function ScholarshipSection() {
  return (
    <section
      className="scholarship-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="overlay">
        <div className="scholarship-content">
          <h1>Unlock Scholarship Opportunities</h1>
          <p>
            Unlock Your Potential with Our Scholarships
            <br />
            We offer a range of scholarships to help you achieve your academic goals. <br/>Whether based on
            merit, need, or special talent, our scholarships ensure that <br/>financial constraints are not a
            barrier to success.
          </p>
          <button className="explore-button">Explore Scholarships</button>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipSection;
