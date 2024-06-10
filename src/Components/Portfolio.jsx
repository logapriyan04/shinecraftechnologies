import React, { useState } from "react";
import projects1 from "../Assests/images/image3.jpg";
import projects2 from "../Assests/images/image2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PiShootingStarLight } from "react-icons/pi";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  const slides = [
    {
      image: projects1,
      title: "IOT HOME AUTOMATION",
      backgroundImage: `url(${projects1})`,
    },
    {
      image: projects2,
      title: "IOT VENDING MACHINE",
      backgroundImage: `url(${projects2})`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Portfolio" id="Portfolio">
      <div className="Portfolio-heading">
        <PiShootingStarLight className="star-light1" />
        <h3>FEATURED PRODUCTS</h3>
        <h2>{slides[currentIndex].title}</h2>
        <div className="btn-1">
          <button onClick={goToPreviousSlide} className="carousel-btn">
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} />
          </button>
          <button onClick={goToNextSlide} className="carousel-btn">
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "white" }} />
          </button>
        </div>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator-btn ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="image-container">
        <div
          className="background"
          style={{
            backgroundImage: slides[currentIndex].backgroundImage,
          }}
        ></div>
        <img
          src={slides[currentIndex].image}
          alt="Project Slide"
          className="project-img"
        />
        <p>{slides[currentIndex].description}</p>
      </div>
    </div>
  );
}

export default Portfolio;
