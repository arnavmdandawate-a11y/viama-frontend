import React, { useEffect } from 'react';
import './index.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const certificateList = [
  {
    id: 1,
    certificateImage: 'viama-startup.jpg',
    description: 'VIAMA Infratech Startup India Certificate',
    additionalDescription: 'Viama Infratech is officially recognized as a registered start-up under the Government of India’s Start-up Initiative. This certification reflects our commitment to innovation, growth, and contributing to the nation’s infrastructure development with excellence and modern solutions.',
  },
  {
    id: 2,
    certificateImage: 'viama-iso.jpg',
    description: 'VIAMA Infratech ISO',
    additionalDescription: 'Viama Infratech proudly holds an ISO certification, a testament to our unwavering commitment to maintaining globally recognized standards in quality management and operational excellence. This prestigious certification highlights our focus on implementing efficient processes, ensuring consistent quality, and prioritizing safety across all our projects. By adhering to these rigorous standards, we not only enhance project precision and reliability but also foster continuous improvement in our operations. Our ISO certification reinforces the trust our clients place in us, assuring them of our dedication to delivering projects that meet and exceed industry benchmarks. At Viama Infratech, we believe that quality, safety, and innovation are the cornerstones of sustainable success, driving us to uphold the highest levels of performance in every endeavor.',
  },
];

const Certificates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="listContainer">
      <NavBar activeTab="certificates" />
      <h1 className="title" data-aos="fade-up">Certificates & Recognition</h1>
      <ul className="certificateList">
        {certificateList.map((item, index) => (
          <div
            className={`certificateItem ${index % 2 === 0 ? 'leftAlign' : 'rightAlign'}`}
            data-aos="fade-up"
            key={item.id}
          >
            <img 
              src={item.certificateImage} 
              alt={item.description} 
              className="certificateImg"
            />
            <div className="certificateContent">
              <h3 className="certificateName">{item.description}</h3>
              <p className="certificateDescription">{item.additionalDescription}</p>
            </div>
          </div>
        ))}
      </ul>
      <div className="h-footer-page ">
        <Footer />
      </div>
    </div>
  );
};

export default Certificates;
