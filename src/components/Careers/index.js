import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './index.css'

class Career extends Component {
  render() {
    return (
      <div className="contact">
        <NavBar activeTab="career" />
        <div className='career-block'>
            <h1 className = 'contact-us'>Join Our Team</h1>
            <p className='person-resumes'>Send your resumes to <a href="mailto:info@viamainfratech.com">info@viamainfratech.com</a></p>
        </div>
        <div className="h-footer-page h-footer-page--contact">
        <Footer />
        </div>
    </div>
    );
  }
}

export default Career;