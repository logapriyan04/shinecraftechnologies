import React, { useEffect } from "react";
import { PiShootingStarLight } from "react-icons/pi";
import ScrollAnimation from "react-animate-on-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="About" id="About">
      <div className="about-heading" data-aos="fade-up">
        <h1 style={{ textTransform: "uppercase" }}>people at helm</h1>

        <h2 style={{ textTransform: "uppercase" }}>
          Crafting Unparalleled Smart<br></br> Technology and Software
          Innovations<br></br> for Exceptional Experiences
        </h2>
        {/* <PiShootingStarLight className="star-light" /> */}
      </div>
      <div className="about-para" data-aos="fade-up">
        <div className="vertical-line"></div>
        <p>
          Shine Craft Technologies is a cutting-edge company,<br></br> dedicated
          to brighten the future through innovative<br></br> technology and
          exceptional craftsmanship. <br></br>We specialize to provide a
          comprehensive range of services<br></br> and products designed to help
          businesses and individuals <br></br>to thrive in the digital age.
        </p>
      </div>
    </div>
  );
}
export default About;
