import React, { useRef } from "react";
import "./Admission.css";
import Tech from "./Tech.png";
import Business from "./business.png";
import Footer from "./Footer";

function Admission() {
  // Create a reference for the Name and Email fields
  const nameEmailRef = useRef(null);

  // Scroll to the Name and Email fields
  const handleApplyNowClick = () => {
    nameEmailRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="desktop-container">
      {/* Text Section */}
      <div className="text-section">
        <h1>
          "Where Learning Meets Opportunity <br /> Join Our Academic Community!"
        </h1>
        <p>
          Embark on a transformative educational journey where knowledge meets
          real-world<br /> opportunities. Join our vibrant academic community and shape
          a brighter future<br /> today.
        </p>
        <p className="registration">Now Open For Registration</p>
        <button className="apply-button" onClick={handleApplyNowClick}>
          Apply Now
        </button>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <img className="icon" src={Tech} alt="Technology Icon" />
          <h3>Technology & Programming</h3>
          <p>
            Known for professional and degree-level courses in Data Science, AI,
            and Web Development.
          </p>
        </div>
        <div className="card">
          <img className="icon" src={Business} alt="Business Icon" />
          <h3>Business, Finance & Entrepreneurship</h3>
          <p>
            Courses in Digital Marketing, Leadership, and Financial Analysis.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-container" ref={nameEmailRef}>
        <form className="form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone" required />
            <input type="text" placeholder="Course" required />
          </div>
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Admission;

