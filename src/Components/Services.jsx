import React, { useEffect } from "react";
import Projectleft from "../Assests/images/mobilephone.png";
import Projectcenter from "../Assests/images/mobile-web.png";
import Projectright from "../Assests/images/robot.png";
import Projectleft1 from "../Assests/images/chatbot-1(2).png";
import Projectcenter1 from "../Assests/images/options.png";
import Projectright1 from "../Assests/images/video-editor.png";
import Projectleft2 from "../Assests/images/3d-modeling.png";
import Projectcenter2 from "../Assests/images/cloud.png";
import Projectright2 from "../Assests/images/IOT.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceData = [
  {
    id: "1",
    name: "MOBILE APP",
    image: Projectleft,
    para: `We create responsive, user-friendly, and feature-rich mobile
  applications for both Android and iOS platforms.`,
    aos: "zoom-out-right",
  },
  {
    id: "2",
    name: "WEBSITE",
    image: Projectcenter,
    para: `We develop everything from simple landing pages to complex web applications. Framework like PHP, HTML, Angular, React js and three. `,
    aos: "zoom-out-down",
  },
  {
    id: "3",
    name: "MACHINE LEARNING AND DEEP LEARNING ",
    image: Projectright,
    para: `We develop algorithms and models that help businesses make data-driven decisions,  and predict future trends.`,
    aos: "zoom-out-left",
  },
  {
    id: "1",
    name: "CHATBOT AND GENERATIVE AI",
    image: Projectleft1,
    para: `We develop intelligent chatbots and generative AI solutions that enhance customer engagement and streamline operations.`,
    aos: "zoom-out-right",
  },
  {
    id: "2",
    name: "CHROME EXTENSIONS",
    image: Projectcenter1,
    para: `Boost productivity and add new functionality to web browsers with our custom Chrome extensions.`,
    aos: "zoom-out",
  },
  {
    id: "3",
    name: "UI/UX AND LOGO BRANDING",
    image: Projectright1,
    para: `We create responsive, user-friendly, and feature-rich mobile
    applications for both Android and iOS platforms.`,
    aos: "zoom-out-left",
  },
  {
    id: "1",
    name: "3D MODELING",
    image: Projectleft2,
    para: `We create detailed and accurate 3D models for various applications, including product design,  and architectural visualization.`,
    aos: "zoom-out-right",
  },
  {
    id: "2",
    name: "BACKEND  AND CLOUD",
    image: Projectcenter2,
    para: `Our services include API development, database management, and cloud migration.`,
    aos: "zoom-out-up",
  },
  {
    id: "3",
    name: "IOT PRODUCTS",
    image: Projectright2,
    para: `From smart home solutions to industrial IoT applications, our expertise covers a wide range of IoT technologies and use cases. `,
    aos: "zoom-out-left",
  },
];

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="service" id="service">
      <h1 data-aos="fade-up" style={{ textTransform: "uppercase" }}>
        things we craft
      </h1>
      <div className="service-heading" data-aos="fade-up">
        <h2>
          OUR VALUABLE <br />
          <span>SERVICES</span>
        </h2>
      </div>
      <div className="service-para" data-aos="fade-up">
        <div className="vertical-line-1"></div>
        <p>
          At Shine Craft Technologies, we provide a broad spectrum of
          cutting-edge<br></br> services designed to meet your digital needs.
          From mobile app and website <br></br>development to advanced AI and
          IoT solutions, we combine innovation and <br></br> quality to deliver
          exceptional results. Our team crafts tailored, high- performance,
          <br></br> solutions that transform your ideas into reality. With us,
          you get seamless<br></br> integration and unmatched expertise
          in every project.
        </p>
      </div>
      <div className="horizontal-line"></div>
      <div className="service-page1">
        {ServiceData.map((item) => (
          <div className="iconsimg" key={item.id} data-aos={item.aos}>
            <img
              src={item.image}
              alt="serviceImage"
              className="serviceicons"
              height={"80px"}
              width={"80px"}
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
