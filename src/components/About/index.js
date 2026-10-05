import { Component } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';

class About extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1200, // Animation duration in ms
        });
    }

    render() {
        return (
            <div>
                <NavBar activeTab="about" />
                <div className="about-page">
                    <h1 className="about-h1" data-aos="fade-down"> ABOUT </h1>
                    <h1 className="about-h2" data-aos="fade-up"> VIAMA INFRATECH </h1>
                    <p className="about-p1" data-aos="fade-right">
                        VIAMA Infratech, incorporated in March 2024, is a young and ambitious construction company that delivers high-quality infrastructure solutions for government projects (B2G).<br />
                        Though new to the industry, VIAMA is focused on the construction of roads, flyovers, bridges, and a broad range of civil works that drive India's infrastructural development. Despite its recent establishment, VIAMA Infratech is fuelled by a passion for excellence and a commitment to precision, setting the stage for a new era of innovation in the construction industry.
                    </p>

                    <div className="miss-vis-card" data-aos="fade-left">
                        <div className="m-v-black-card ">
                            <img className="m-vis-card1"src="our_vision.jpeg" alt="Our Vision" />
                        </div>
                        <div>
                            <h1> OUR VISION </h1>
                            <p>
                            We aim to become India's most valuable construction company, known for its integrity, precision, and ability to consistently deliver world-class infrastructure projects.
                            </p>
                        </div>
                    </div>

                    <div className="miss-vis-card m-v-reverse" data-aos="fade-right">
                        <div>
                            <h1> OUR MISSION </h1>
                            <p>
                            To transform India's infrastructure landscape by delivering innovative, reliable, and sustainable construction solutions that enhance connectivity and empower communities.</p>
                        </div>
                        <div className="m-v-black-card">
                            <img src="our_mission.png" alt="Our Mission" />
                        </div>
                    </div>
                </div>
                <div className="h-footer-page">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default About;
