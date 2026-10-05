import React, { useEffect } from 'react';
import './index.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const signatureProjects = [
  {
    id: 1,
    projectImage: 'missing link photo.png',
    projectTitle: 'India’s First Sectional Speed ITMS Deployment',
    projectDescription:
      'A 5-year Intelligent Traffic Management System (ITMS) deployment for MSRDC on the Missing Link project of the Mumbai-Pune Expressway. The project features India’s first-of-its-kind Sectional Speed Detection System inside a tunnel to evaluate continuous vehicle behavior and improve corridor safety.',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="sig-container">
      <NavBar activeTab="projects" />
      <h1 className="sig-title" data-aos="fade-up">Signature Projects</h1>
      <ul className="sig-list">
        {signatureProjects.map((item, index) => (
          <div
            className={`sig-item ${index % 2 === 0 ? 'sig-leftAlign' : 'sig-rightAlign'}`}
            data-aos="fade-up"
            key={item.id}
          >
            <img
              src={item.projectImage}
              alt={item.projectTitle}
              className="sig-img"
            />
            <div className="sig-content">
              <h2 className="sig-projectTitle">{item.projectTitle}</h2>
              <p className="sig-projectDescription">{item.projectDescription}</p>
            </div>
          </div>
        ))}
      </ul>
      <div className="sig-footer-page">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;