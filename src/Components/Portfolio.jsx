import React, { useState } from "react";
import projects1 from "../Assests/images/image3.jpg";
import projects2 from "../Assests/images/image2.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    console.log("i", currentIndex);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    console.log("n I", currentIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="Portfolio"
      id="Portfolio"
      style={{
        // maxWidth: "1400px",
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <h1>FEATURED PRODUCTS</h1>
      <div className="Portfolio-heading">
        {/* <PiShootingStarLight className="star-light1" /> */}
        <div>
          <h2>{slides[currentIndex].title}</h2>
          <div className="btn-1">
            <button
              onClick={() => goToPreviousSlide()}
              className="carousel-btn"
            >
              <FaChevronLeft
                style={{
                  color: "white",
                }}
              />
            </button>
            <button onClick={() => goToNextSlide()} className="carousel-btn">
              <FaChevronRight
                style={{
                  color: "white",
                  pointerEvents: "fill",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
        </div>
        {/* <div className="carousel-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator-btn ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div> */}
      </div>
      <div
        className="image-container"
        style={{
          position: "absolute",
          right: "5%",
          // justifyContent: "end",

          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        {/* <p>{slides[currentIndex].description}</p> */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator-btn ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
