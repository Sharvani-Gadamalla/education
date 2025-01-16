import React from 'react';

import HeroSection from '../components/HeroSection';
import '../App.css';
import AboutSection from '../components/AboutSection';
import ScholarshipSection from '../components/ScholarshipSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EventsSection from '../components/EventsSection';
// import UpcomingEvents from '../components/UpcomingEvents';
import Footer from "./Footer.js"

const Home = () => {
  return (
    <div>
   
      <HeroSection />
       <AboutSection/>
     <ScholarshipSection/>
      <TestimonialsSection/>
      <EventsSection/>
      <Footer/>
     {/* <UpcomingEvents/> */}
    </div>
  );
};

export default Home;
