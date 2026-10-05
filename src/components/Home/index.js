import { Component } from "react";
import './index.css';
import UncontrolledCarousel from "../Carousel";
import NavBar from "../NavBar";
import Footer from "../Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const verticals = [
    {
        title: "Road Construction",
        description: "Specializing in building durable and high-quality roads for government projects, using modern engineering practices and sustainable materials.",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/07/full/1649273930-1611.jpg"
    },
    {
        title: "Flyover and Bridge Construction",
        description: "Designing and constructing structurally sound flyovers and bridges to enhance urban and rural connectivity.",
        image: "https://www.constructionworld.in/assets/uploads/1655465cf54fe4f85d43c552714b03782f664.webp"
    },
    {
        title: "Civil Infrastructure Development",
        description: "Focusing on the construction of essential infrastructure such as underpasses, culverts, and drainage systems to support urban development.",
        image: "https://infratechgeo.com/images/client-sectors/civil-infrastructure.jpg"
    },
    {
        title: "Highway and Expressway Development",
        description: "Developing large-scale highway and expressway projects to ensure seamless intercity and interstate transportation.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Delhi-Meerut-Express-Highway-India.png"
    },
    {
        title: "Operation and Maintenance",
        description: "Providing long-term maintenance and upgradation services for roads and structures to ensure their safety and longevity.",
        image: "https://www.alsec.in/wp-content/uploads/2024/03/ALSEC-Blogs-2.png"
    },
];

class Home extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1200, // Animation duration in ms
        });
    }

    render() {
        return (
            <div>
                <div className="h-first-page">
                    <NavBar activeTab="home" />
                    <div className="first-sub-page">
                        <UncontrolledCarousel />
                    </div>
                </div>
                <div className="h-second-page">
                    <div className="sp-first-block">
                        <div className="black-box-sp" data-aos="fade-right">
                            <img src="IMG_3338.jpg" alt="" />
                        </div>
                    </div>
                    <div className="sp-second-block" data-aos="fade-left">
                        <h1> VIAMA INFRATECH </h1>
                        <p> VIAMA Infratech, incorporated in March 2024, is a young and ambitious construction company that delivers high-quality infrastructure solutions for government projects (B2G). Though new to the industry, VIAMA is focused on the construction of roads, flyovers, bridges, and a broad range of civil works that drive India's infrastructural development.
                        Despite its recent establishment, VIAMA Infratech is fuelled by a passion for excellence and a commitment to precision, setting the stage for a new era of innovation in the construction industry. </p>
                    </div>
                </div>
                <div className="h-third-page">
                    <h1 className="h-tp-h1" data-aos="zoom-in"> OUR VERTICALS </h1>
                    <div className="projects-box">
                        {verticals.map((vertical, index) => (
                            <div key={index} className="tp-black-box" data-aos="flip-left">
                                <img src={vertical.image} alt={vertical.title} className="vertical-image" />
                                <div className="overlay">
                                    <h2>{vertical.title}</h2>
                                    <p>{vertical.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-fourth-page">
                    <h1 className="h-fp-h1" data-aos="fade-up"> <span className="h-fp-h1-sp1"> LEGACY OF </span><br /><span className="h-fp-h1-sp2"> EXCELLENCE </span> </h1>
                    <p data-aos="fade-up">At VIAMA Infratech, excellence is the cornerstone of every project we undertake. Our unwavering commitment to quality ensures that each structure we build is a benchmark in durability and precision. We embrace cutting-edge technology and industry best practices to achieve unparalleled standards of engineering and design. With a progressive and skilled team, we prioritize sustainability, innovation, and meticulous planning to deliver projects that exceed expectations. Our dedication to timely completion, cost efficiency, and compliance with government regulations reflects our promise to redefine India’s infrastructure landscape with excellence at every step.</p>
                </div>
                <div className="h-footer-page">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
