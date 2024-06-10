import React from "react";
import { PiShootingStarLight } from "react-icons/pi";
function About() {
  return (
    <div className="About" id="About">
      <div className="about-heading">
        <h3>WHO WE ARE</h3>

        <h2>
          WE CRAFT AWESOME <br></br>WEB AND APP SOLUTIONS{" "}
        </h2>
        <PiShootingStarLight className="star-light" />
      </div>
      <div className="about-para">
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
