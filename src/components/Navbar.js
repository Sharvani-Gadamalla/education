import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import logo from "../assets/logo.png"; // Adjust the path if necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="EduNova Logo" className="logo-image" />
                <span className="logo-title">EduNova University</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/admission">Admission</Link></li>
                <li><Link to="/login">Log in</Link></li>
            </ul>
            <button className="search-button">
                <FaSearch className="search-icon" />
                Search Course
            </button>
        </nav>
    );
}

export default Navbar;
