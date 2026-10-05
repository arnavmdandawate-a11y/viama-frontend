import React from "react";
import { Carousel } from "react-bootstrap";
import "./index.css"; // Import the CSS for animations and styling

const UncontrolledCarousel = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item style={{ height: "100vh", position: "relative" }}>
        <img
          className="d-block h-100 zoom-in"
          src="IMG_4147.jpg"
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            background: "rgba(0, 0, 0, 0.52)",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            // backdropFilter: "blur(10px)",
            // WebkitBackdropFilter: "blur(5px)",
            padding: "10px 20px",
            position: "absolute",
            width: "100%",
            left: "0",
            bottom: "0",
            height: "125px",
            paddingTop: "25px",
          }}
        >
          <h3 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif" }}>Crafting Legacy</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "100vh" }}>
        <img
          className="d-block w-100 zoom-in"
          src="IMG_4328.jpg"
          alt="Second slide"
        />
        <Carousel.Caption
          style={{
            background: "rgba(0, 0, 0, 0.52)",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            // backdropFilter: "blur(10px)",
            // WebkitBackdropFilter: "blur(5px)",
            padding: "10px 20px",
            position: "absolute",
            width: "100%",
            left: "0",
            bottom: "0",
            height: "125px",
            paddingTop: "25px",
          }}
        >
          <h3 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif" }}>Shaping Futures</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "100vh" }}>
        <img
          className="d-block w-100 zoom-in"
          src="IMG_3599.jpg"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            background: "rgba(0, 0, 0, 0.52)",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            // backdropFilter: "blur(10px)",
            // WebkitBackdropFilter: "blur(5px)",
            padding: "10px 20px",
            position: "absolute",
            width: "100%",
            left: "0",
            bottom: "0",
            height: "125px",
            paddingTop: "25px",
          }}
        >
          <h3 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif" }}>Driving Growth</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default UncontrolledCarousel;
