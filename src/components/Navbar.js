import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log("Searching for:", searchTerm); // Replace with navigation or search logic
            // alert(`Searching for: ${searchTerm}`);
        }
        setShowSearch(false); // Hide search after submission
    };

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
            <button className="search-button" onClick={handleSearchToggle}>
                <FaSearch className="search-icon" />
                Search 
            </button>
            {showSearch && (
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button type="submit" className="submit-button">Go</button>
                </form>
            )}
        </nav>
    );
}

export default Navbar;
