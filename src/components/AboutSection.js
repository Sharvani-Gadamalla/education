// import React from 'react';
// import './AboutSection.css'; // CSS file for styling
// import image1 from '../assets/image1.png'; // Correct path to the assets folder
// import image2 from '../assets/image2.png'; // Correct path to the assets folder

// function AboutSection() {
//   return (
//     <section className="about-section">
//       <div className="about-header">
//         <h4>Education for a brighter tomorrow</h4>
//         <h2>About University</h2>
//         <p>
//           EduNova University, a leading hub for academic excellence and innovation. 
//           At EduNova, we are dedicated to empowering students with the knowledge, 
//           skills, and values they need to excel in a dynamic and ever-evolving world.
//         </p>
//         <div className="buttons-container">
//           <button className="mission-button">University Mission Excellence</button>
//           <button className="vision-button">University Vision Progress</button>
//         </div>
//         <button className="view-programs-button">View All Programs →</button>
//       </div>
//       <div className="about-images">
//         <img src={image1} alt="Graduation" className="about-image" />
//         <img src={image2} alt="Student" className="about-image" />
//       </div>
//       <div className="stats">
//         <div className="stat-box">85%<br />Success Rate</div>
//         <div className="stat-box">100k<br />Students</div>
//         <div className="stat-box">70%<br />Job Placement</div>
//         <div className="stat-box">200+<br />Expert Trainers</div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;

import React from 'react';
import './AboutSection.css'; // CSS file for styling
import image1 from '../assets/image1.png'; // Correct path to the assets folder
import image2 from '../assets/image2.png'; // Correct path to the assets folder

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-header">
          <h4>Education for a brighter tomorrow</h4>
          <h2>About University</h2>
          <p>
            EduNova University, a leading hub for academic excellence and innovation. 
            At EduNova, we are dedicated to empowering students with the knowledge, 
            skills, and values they need to excel in a dynamic and ever-evolving world.
            <br/>To foster a culture of excellence in education, research, and community engagement, equipping students to thrive in a global society.
          </p>
          <div className="buttons-container">
            <button className="mission-button">University Mission Excellence</button>
            <button className="vision-button">University Vision Progress</button>
          </div>
          <button className="view-programs-button">View All Programs →</button>
        </div>
        <div className="about-images">
          <img src={image1} alt="Graduation" className="about-image1" />
          <img src={image2} alt="Student" className="about-image2" />
        </div>
      </div>
      <div className="stats">
        <div className="stat-box">85%<br />Success Rate</div>
        <div className="stat-box2">100k<br />Students</div>
        <div className="stat-box">70%<br />Job Placement</div>
        <div className="stat-box">200+<br />Expert Trainers</div>
      </div>
    </section>
  );
}

export default AboutSection;
