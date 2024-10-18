import React from 'react';
import './Footer.css';  // Adjust the path based on where your CSS file is located

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Right Resource Fit Logo" />
        </div>
        <div className="footer-text">
          &copy; 2024 Right Resource Fit. All rights reserved.
        </div>
      </div>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
};

export default Footer;
