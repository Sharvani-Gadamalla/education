//  import React from 'react';
//  import './EventsSection.css'; // CSS file for styles

// Replace with actual paths to event images
// import eventImage1 from '../assets/event2.png';
// import eventImage2 from '../assets/event1.png';

// function EventsSection() {
//   return (
//     <section className="new-events-section">
//       <div className="new-consultation-banner">
//         <div className="new-consultation-content">
//           <h2>Sign up for consultation</h2>
//           <p className="new-updated-news">Updated latest news</p>
//           <p>
//             Enroll now and take the first step toward a brighter future. Catch the latest updates on
//             admissions, events, and programs. Stay informed with all our recent announcements!
//           </p>
//         </div>
//         <div className="new-stats">
//           <div className="new-stat-item">
//             <span>100+</span>
//             <p>Active Users</p>
//           </div>
//           <div className="new-stat-item2">
//             <span>100k</span>
//             <p>Students</p>
//           </div>
//         </div>
//       </div>

//       <div className="new-events-heading">
//         <h3>Latest Updates and Events</h3>
//       </div>

//       <div className="new-events-gallery1">
//         <div className="new-event-image-container left">
//           <img src={eventImage1} alt="Event 1" />
//         </div>
//         <div className="new-events-gallery2"></div>
//         <div className="new-event-image-container right">
//           <img src={eventImage2} alt="Event 2" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default EventsSection;

import React from "react";
import "./EventsSection.css";

import eventImage1 from "../assets/event2.png";
import eventImage2 from "../assets/event1.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
function EventsSection() {
  return (
    <section className="events-section">
      <div className="consultation-section">
        <div className="text-content">
          <h2>
            Sign up for <span className="highlight">consultation</span>
            <br />
            updated latest news
          </h2>
          <p>
            Enroll now and take the first step toward a brighter future. Catch
            the latest <br />
            updates on admissions, events, and programs. Stay informed with all
            our recent <br />
            announcements!
          </p>
        </div>
        <div className="stats">
          <div className="users-info">
            <div className="avatars">
              <img src={avatar1} alt="User 1" className="avatar" />
              <img src={avatar2} alt="User 2" className="avatar" />
              <img src={avatar3} alt="User 2" className="avatar" />
            </div>
            <p className="info-1">
              <strong>100+</strong> Active Users
            </p>
          </div>
          <div className="students-info">
            <p>
              <strong>100k</strong> Students
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>
          <center>Latest Updates and Events</center>
        </h1>
        <div className="Event1">
        <div style={{ display: "flex", flexDirection: "row", margin: "3%", alignItems: "flex-start", justifyContent: "center" }}>
  <p style={{ width: "50%", paddingTop: "11%", textAlign: "justify" }}>
    Stay informed with the latest developments from<br/> 
    our university! We are thrilled to announce the<br/> 
    introduction of new programs in high-demand<br/> 
    fields such as Artificial Intelligence,<br/> 
    Biotechnology, and Renewable Energy. These<br/> 
    programs are designed to equip students with<br/> 
    cutting-edge skills for the future.
  </p>
  <img src={eventImage1} style={{ width: "50%", objectFit: "cover" }} alt="Event Image" />
</div>

        </div>
        <div className="Event2">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={eventImage2} style={{ width: "50%", margin: "3%" }}></img>
            <p style={{ width: "50%", paddingTop: "11%" }}>
              Symposium will be held on February 20th, featuring<br/> industry
              leaders and live project showcases by students.<br/> Following this,
              the university will host its Cultural Fest on<br/> March 5th,
              celebrating the diversity and creativity of our <br/>vibrant community.
              With workshops, competitions, and<br/> inspiring guest speakers, these
              events promise<br/> opportunities to learn, network, and have fun.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default EventsSection;
