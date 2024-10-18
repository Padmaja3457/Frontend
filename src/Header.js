import React from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa'; // Import FaUser icon
import './Header.css';

const Header = () => {
  return (
    <div className="top-header-container">
      {/* Left Section: Dashboard Label */}
      <div className="dashboard-label">
        <span>Dashboard</span>
      </div>

      {/* Right Section: Search and Icons */}
      <div className="top-header-right">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for Jobs and etc." />
          <FaSearch className="search-icon" />
        </div>

        {/* Notification Icon */}
        <div className="notification-icon">
          <FaBell />
          <span className="notification-badge">2</span>
        </div>

        {/* Profile Icon */}
        <div className="profile-icon">
          <FaUser size={40} /> {/* Use FaUser icon */}
        </div>
      </div>
    </div>
  );
};

export default Header;
