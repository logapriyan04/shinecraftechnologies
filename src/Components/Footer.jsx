import React, { useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { MdAddCall } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Footer" style={{ overflowY: "hidden" }}>
      <div className="Footer-head">
        <div className="Footer-1">
          <h6>SHINECRAFT TECHNOLOGIES</h6>

          <p>CREATE | CRAFT | CONNECT</p>

          <h3>
            <Link to="/Profile1">FOUNDER - AJITHKUMAR</Link>{" "}
            <BsBoxArrowUpRight />
            <br></br>
            <Link to="/secondprofile">
              {" "}
              CO-FOUNDER - MOHAN <BsBoxArrowUpRight />
            </Link>
          </h3>
          <h3></h3>
        </div>

        <div className="Footer-topic">
          <h6>COMPANY</h6>
          <p>
            <a href="#!" className="text-reset">
              ABOUT
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              SERVICES
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              PORTFOLIO
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              CONTACT
            </a>
          </p>
        </div>
        <div className="Footer-contact">
          <h6>CONTACT</h6>
          <div className="contact-item">
            <MdAddCall className="contact-icon" />
            <p>+91-7200353789</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>solutions@shincrafttechnologies.com</p>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-content">
        <p>@2024| Alrights reserved</p>
      </div>
      <div className="Footer-icons">
        <IoLogoGithub className="social-icon" />

        <CiLinkedin className="social-icon" />

        <FaInstagram className="social-icon" />

        <IoLogoFacebook className="social-icon" />
      </div>
    </div>
  );
}
export default Footer;
