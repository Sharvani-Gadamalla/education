import React from 'react';
import './Events.css';
import leftArrow from "./left-arrow.png"; // Replace with the path to your left arrow image
import rightArrow from "./right-arrow.png"; // Replace with the path to your right arrow image
import event11 from "./event11.png"; // Replace with the path to your first event image
import event12 from "./event12.png"; // Replace with the path to your second event image
import event13 from "./event13.png";
import image309 from "../assets/image309.png";
import image310 from "../assets/image310.png";
import image311 from "../assets/image311.png";
import image312 from "../assets/image312.png";
import image313 from "../assets/image313.png";
import image314 from "../assets/image314.png";
import Footer from './Footer';

const eventsData = [
  {
    date: 'April 7, 2025',
    time: '12:00 PM - 6:00 PM',
    location: 'Outdoor Campus Area',
    facilities: 'Food Stalls, Seating, Outdoor Sound System, Rest Areas',
    imageUrl: image309,
  },
  {
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    facilities: 'Breakout Rooms for Workshops, Exhibition Stalls',
    imageUrl: image310,
  },
  {
    date: 'November 1, 2025',
    time: '6:00 PM - 9:00 PM',
    location: 'Campus Courtyard',
    facilities: 'Decorations, Sound System, Lighting, Fireworks Display',
    imageUrl: image311,
  },
  {
    date: 'March 30, 2025',
    time: '8:00 AM - 4:00 PM',
    location: 'Sports Ground',
    facilities: 'Field Setup, Scoreboard, Refreshment Stands, Medical Assistance',
    imageUrl: image312,
  },
  {
    date: 'February 28, 2025',
    time: '5:00 PM - 10:00 PM',
    location: 'Open-Air Theater',
    facilities: 'Stage, Sound System, Lighting, Seating, Food Stalls',
    imageUrl: image313,
  },
  {
    date: 'March 25, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Cultural Center',
    facilities: 'Stage for Performances, Exhibition Stalls, Sound System, Traditional Attire Collection',
    imageUrl: image314,
  },
];

function Events() {
  return (
    <div className="events-container">
      <div className="events-section">
        <h1>Upcoming Events</h1>
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.imageUrl} alt={`Event ${index + 1}`} className="event-image" />
              <div className="event-details">
                <p><strong>Date & Time:</strong> {event.date}, {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Facilities:</strong> {event.facilities}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hyper-container">
          <h2 className="hyper-title">Previous Event</h2>
          <div className="hyper-carousel">
            <img src={leftArrow} alt="Left Arrow" className="hyper-arrow" />
            <div className="hyper-images">
              <img src={event11} alt="Event 11" className="hyper-image" />
              <img src={event12} alt="Event 12" className="hyper-image" />
              <img src={event13} alt="Event 13" className="hyper-image" />
            </div>
            <img src={rightArrow} alt="Right Arrow" className="hyper-arrow" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
