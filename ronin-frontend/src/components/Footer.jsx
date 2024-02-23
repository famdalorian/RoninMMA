import React from 'react';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://discord.gg/ZvZeEgJyjR" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/forth_muay_thai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
