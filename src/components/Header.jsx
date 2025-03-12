// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
    return (
        <header className="header">
            {/* Logo */}
            <img src="/logo.png" alt="LegoSec Logo" className="logo" />

            {/* Navigation Menu */}
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/documentation">Documentation</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                    <li><Link to="/requirements">Requirements</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>
            </nav>

            {/* Search Bar */}
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </header>
    );
};

export default Header;