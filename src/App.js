
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure Navbar is imported here

import Home from './pages/Home'; // Assuming these pages are created
import Courses from "./pages/Courses";
import Events from './pages/Events';
import Admission from './pages/Admission';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here so it appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
