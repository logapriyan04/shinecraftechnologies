import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { HiMiniArrowLongUp } from "react-icons/hi2";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="Contact" id="Contact">
      <h3>HAVE YOU PROJECT IN MIND</h3>
      <div className="contact-heading">
        <h1>
          LET'S MAKE SOMETHING <br></br>GREAT TOGETHER !
        </h1>
      </div>
      <button className="circular-button" onClick={togglePopup}>
        <BsArrowUpRight className="arrow-icon" />
        Contact
      </button>

      {isPopupOpen && (
        <div id="popupContainer" className="popupContainer">
          <div className="popupContent">
            <span className="closeBtn" onClick={togglePopup}>
              &times;
            </span>
            <h2>CONTACT FORM</h2>
            <form id="registerForm">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                ></input>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                ></input>
              </div>
              <div class="form-group">
                <textarea
                  type="text"
                  class="form-control"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      <div>
        <a href="#About">
          <button className="vertical-line-container-2">
            <HiMiniArrowLongUp className="arrow-down" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
