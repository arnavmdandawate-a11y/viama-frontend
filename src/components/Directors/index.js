import React, { useEffect } from 'react';
import './index.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const userDetailsList = [
  {
    UniqueNo: 1,
    userImage: 'arnav dandawate.jpeg',
    userName: 'Arnav Dandawate',
    userRole: 'Managing Director',
    userMatter: 'At just 21 years old, Arnav Dandawate serves as the Managing Director of VIAMA Infratech. He holds a BBA in Entrepreneurship and Finance and brings a sharp focus on business development and project execution. Arnav’s forward-thinking leadership ensures that the company’s projects are not only delivered with the utmost precision but also meet tight deadlines. His youthful energy and business acumen position VIAMA as a company ready to challenge industry norms and set new standards in the field.',
  },
  {
    UniqueNo: 2,
    userImage: 'mohit.jpg',
    userName: 'Mohit Aitwadkar',
    userRole: 'Director - Information Technology',
    userMatter: 'Mohit Aitwadkar, a dynamic leader at Viama, brings over 15+ years of experience in Information Technology. Since joining the organization, he has streamlined administrative operations and played a crucial role in several certification audits, ensuring compliance with the highest standards. In addition to his technical expertise, Mohit focuses on controlling expenses and optimizing resources to drive cost-efficiency across the company. His strategic mindset and dedication make him an invaluable asset to Viama Infratech.',
  },
];

const Directors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="listContainer">
      <NavBar activeTab="directors" />
      <h1 className="title" data-aos="fade-up">Board of Directors</h1>
      <ul className="directorsList">
        {userDetailsList.map((eachItem, index) => (
          <div
            className={`directorProfile ${index % 2 === 0 ? 'leftAlign' : 'rightAlign'}`}
            data-aos="fade-up"
            key={eachItem.UniqueNo}
          >
            <img src={eachItem.userImage} alt={eachItem.userName} className="directorImage" />
            <div className="textContainer">
              <h2 className="directorName">{eachItem.userName}</h2>
              <p className="directorDescription">{eachItem.userMatter}</p>
            </div>
          </div>
        ))}
      </ul>
      <div className="h-footer-page">
        <Footer />
      </div>
    </div>
  );
};

export default Directors;
