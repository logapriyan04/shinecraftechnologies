import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMiniArrowLongUp } from "react-icons/hi2";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(false); // Close the form popup

    if (name === "" || email === "" || message === "") {
      setIsErrorPopupOpen(true); // Show error popup
      return;
    }

    const serviceId = "service_sav2i1r";
    const templateId = "template_9zot3co";
    const publicKey = "xNe_IKaCy3kcvYGQO";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "logapriyanlogu",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
        setIsSuccessPopupOpen(true); // Show success popup
      })
      .catch((error) => {
        console.log("Error sending mail", error);
      });
  };

  return (
    <div className="Contact" id="Contact">
      <h3>HAVE YOU PROJECT IN MIND</h3>
      <div className="contact-heading">
        <h1>
          LET'S MAKE SOMETHING <br /> <span>GREAT TOGETHER !</span>
        </h1>
      </div>
      <button className="circular-button" onClick={togglePopup}>
        <BsArrowUpRight className="arrow-icon" />
        <p>Contact</p>
      </button>

      {isPopupOpen && (
        <div id="popupContainer" className="popupContainer">
          <div className="popupContent">
            <span className="closeBtn" onClick={togglePopup}>
              &times;
            </span>
            <h2>CONTACT FORM</h2>
            <form
              onSubmit={handleSubmit}
              className="emailForm"
              id="registerForm"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {isSuccessPopupOpen && (
        <div id="successPopupContainer" className="successPopupContainer">
          <div className="successPopupContent">
            <span
              className="closeBtn"
              onClick={() => setIsSuccessPopupOpen(false)}
            >
              &times;
            </span>
            <h2>Thank you!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={() => setIsSuccessPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {isErrorPopupOpen && (
        <div id="errorPopupContainer" className="errorPopupContainer">
          <div className="errorPopupContent">
            <span
              className="closeBtn"
              onClick={() => setIsErrorPopupOpen(false)}
            >
              &times;
            </span>
            <h2>Error</h2>
            <p>All fields are required.</p>
            <button onClick={() => setIsErrorPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}

      <div>
        <a href="#Home">
          <button className="vertical-line-container-2">
            <HiMiniArrowLongUp className="arrow-down" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
