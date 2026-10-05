import { Component } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";

import './index.css'

import NavBar from "../NavBar";
import Footer from "../Footer";

class ContactUs extends Component {
    render() {
        return (
            <>
                <div className="git-page">

                    <NavBar activeTab="contact" />
                    <h1 className="git-first-h1 reveal-text"> GET IN TOUCH </h1>
                    <h1 className="git-second-h1 reveal-text"> Contact Us </h1>
                    <div className="contact-block">
                        <div className="contact-black-block">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7544.299552295743!2d73.0326519423014!3d19.013120678714053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3aca6f89e15%3A0x8943a177075823b3!2sPujit%20Plaza!5e0!3m2!1sen!2sin!4v1736003343485!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="contact-details-block">
                            <h1 className="reveal-text"> VIAMA INFRATECH<br />PVT. LTD. </h1>
                            <p className="reveal-text"> Office No. 204, Pujit Plaza, Thane, <br /> Maharashtra, India, 400614. </p>
                            <p className="reveal-text"> <MdOutlineMail className="sm-i-size" style={{
                                fontSize: '30px',
                                marginRight: '10px',
                            }} /> Email : <span>info@viamainfratech.com
                                </span></p>
                            <p className="reveal-text"> <FaPhoneAlt className="sm-i-size" style={{
                                fontSize: '30px',
                                marginRight: '10px',
                            }} />  Phone : <span> 022 - 27582222</span></p>
                        </div>
                    </div>
                </div>
                <div className="h-footer-page h-footer-contact">
                    <Footer />
                </div>
            </>
        )
    }
}

export default ContactUs
