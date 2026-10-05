import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

class NavBar extends Component {
    render() {
        const { activeTab } = this.props; // Destructure the activeTab prop

        return (
            <nav className="navbar navbar-expand-xl navbar-light bg-white shadow-sm fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src='/Viama Logo.jpg' alt="Website Logo" height="60" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                                    to="/"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} 
                                    to="/about"
                                >
                                    ABOUT US
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab === 'directors' ? 'active' : ''}`} 
                                    to="/directors"
                                >
                                    DIRECTORS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab === 'certificates' ? 'active' : ''}`}  
                                    to="/certificates"
                                >
                                    CERTIFICATIONS & RECOGNITION
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}  
                                    to="/projects"
                                >
                                    SIGNATURE PROJECTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab === 'career' ? 'active' : ''}`} 
                                    to="/career"
                                >
                                    CAREER
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} 
                                    to="/contact"
                                >
                                    CONTACT US
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
