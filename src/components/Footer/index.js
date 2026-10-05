import React, { Component } from 'react';
import './index.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <div className="footer-page">
        <div className="footer-left">
          <p>All Right Reserved Viama Infratech Private Ltd. © 2024</p>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/company/viama-infratech" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/viama_infratech/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a> */}
        </div>
      </div>
    );
  }
}

export default Footer;