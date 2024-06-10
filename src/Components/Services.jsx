import React from "react";
import Projectleft from "../Assests/images/icon1.png";
import Projectcenter from "../Assests/images/coding.png";
import Projectright from "../Assests/images/deep-learning.png";
import Projectleft1 from "../Assests/images/chatbot.png";
import Projectcenter1 from "../Assests/images/solution.png";
import Projectright1 from "../Assests/images/design.png";
import Projectleft2 from "../Assests/images/icon6.png";
import Projectcenter2 from "../Assests/images/database.png";
import Projectright2 from "../Assests/images/icon8.png";

const ServiceData = [
  {
    id: "1",
    name: "MOBILE APP",
    image: Projectleft,
    para: `We create responsive, user-friendly, and feature-rich mobile
  applications for both Android and iOS platforms.`,
  },
  {
    id: "2",
    name: "WEBSITE",
    image: Projectcenter,
    para: `We develop everything from simple landing pages to complex web applications. Framework like PHP, HTML, Angular, React js and three. `,
  },
  {
    id: "3",
    name: "MACHINE LEARNING AND DEEP LEARNING ",
    image: Projectright,
    para: `We develop algorithms and models that help businesses make data-driven decisions,  and predict future trends.`,
  },
  {
    id: "1",
    name: "CHABOT AND GENERATIVE AI",
    image: Projectleft1,
    para: `We develop intelligent chatbots and generative AI solutions that enhance customer engagement and streamline operations.`,
  },
  {
    id: "2",
    name: "CHROME EXTENSIONS",
    image: Projectcenter1,
    para: `Boost productivity and add new functionality to web browsers with our custom Chrome extensions.`,
  },
  {
    id: "3",
    name: "UI/UX AND LOGO BRANDING",
    image: Projectright1,
    para: `We create responsive, user-friendly, and feature-rich mobile
    applications for both Android and iOS platforms.`,
  },
  {
    id: "1",
    name: "3D MODELING",
    image: Projectleft2,
    para: `We create detailed and accurate 3D models for various applications, including product design,  and architectural visualization.`,
  },
  {
    id: "2",
    name: "BACKEND  AND CLOUD",
    image: Projectcenter2,
    para: `WOur services include API development, database management, and cloud migration.`,
  },
  {
    id: "3",
    name: "IOT PRODUCTS",
    image: Projectright2,
    para: `From smart home solutions to industrial IoT applications, our expertise covers a wide range of IoT technologies and use cases. `,
  },
];

function Services() {
  return (
    <div className="service" id="service">
      <h4>SERVICES</h4>
      <div className="service-heading">
        <h2>
          OUR VALUABLE <br />
          <span>SERVICES</span>
        </h2>
      </div>
      <div className="service-para">
        <div className="vertical-line"></div>
        <p>
          Shine Craft Technologies is a cutting-edge company,
          <br />
          dedicated to brighten the future through innovative
          <br />
          technology and exceptional craftsmanship. <br />
          We specialize to provide a comprehensive range of services
          <br />
          and products designed to help businesses and individuals <br />
          to thrive in the digital age.
        </p>
      </div>
      <div className="horizontal-line"></div>
      <div className="service-page1">
        {ServiceData.map((item) => (
          <div className="iconsimg" key={item.id}>
            <img
              src={item.image}
              alt="serviceImage"
              className="serviceicons"
              height={"90px"}
              width={"90px"}
            />
            <div>
              <span className="service-name">{item.name}</span>
            </div>
            <div className="content-para">
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
