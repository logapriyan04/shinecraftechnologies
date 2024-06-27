import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMiniArrowLongUp } from "react-icons/hi2";
import { Link as ScrollLink } from "react-scroll";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    resetErrors();
  };

  const resetErrors = () => {
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = name !== "";
    const isEmailValid = email !== "";
    const isMessageValid = message !== "";

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
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
      to_email: "your_email@example.com", // Replace with your actual email address
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
        setIsPopupOpen(false); // Close the form popup
      })
      .catch((error) => {
        console.log("Error sending mail", error);
      });
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Contact" id="Contact">
      <div className="contact-heading" data-aos="fade-up">
        <h3 style={{ textTransform: "uppercase" }}>
          in case you have a project,
        </h3>
        <h1>
          LET'S MAKE SOMETHING <br />{" "}
          <span style={{ color: "rgba(71, 79, 122, 255)" }}>
            GREAT TOGETHER !
          </span>
        </h1>
      </div>
      <button
        className="circular-button"
        data-aos="zoom-in"
        onClick={togglePopup}
      >
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
              <div className={`form-group ${nameError ? "error" : ""}`}>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="error-message">Name is required</p>}
              </div>
              <div className={`form-group ${emailError ? "error" : ""}`}>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="error-message">Email is required</p>
                )}
              </div>
              <div className={`form-group ${messageError ? "error" : ""}`}>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {messageError && (
                  <p className="error-message">Message is required</p>
                )}
              </div>
              <button type="submit">SUBMIT</button>
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

      <div>
        <ScrollLink
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="vertical-line-container-2">
            <HiMiniArrowLongUp className="arrow-down" />
          </button>
        </ScrollLink>
      </div>
    </div>
  );
}

export default Contact;
