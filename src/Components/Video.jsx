import React, { useEffect, useState } from "react";
import {
  PiNumberCircleSixThin,
  PiNumberCircleSevenThin,
  PiNumberCircleOneThin,
  PiNumberCircleTwoThin,
  PiNumberCircleThreeThin,
  PiNumberCircleFourThin,
  PiNumberCircleFiveThin,
} from "react-icons/pi";
import Aos from "aos";
import "aos/dist/aos.css";
function Video() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });
  return (
    <div className="offers-container">
      <div className="Offers" data-aos="flip-up">
        <div className="Offers-heading">
          <h1>WHY CHOOSE US</h1>

          <div className="Offer-para-1">
            <div className="vertical-line-2-offer"></div>
            <p>
              Shine Craft Technologies is your ultimate partner for innovative
              and comprehensive digital solutions. We specialize in delivering
              customized, high-quality technology services tailored to your
              unique needs. Our commitment to excellence ensures robust and
              future-ready outcomes, while our client-centric approach fosters
              open communication and collaboration. Choose us to transform your
              vision into reality with exceptional expertise and
              unwavering dedication.
            </p>
          </div>
        </div>
        <div className="circles">
          <div className="container-1">
            <div className="circle-container circle1" data-aos="fade-left">
              <PiNumberCircleOneThin
                className="circleNum1"
                style={{ height: "70px", width: "70px" }}
              />

              <div className="title-offers">
                <p>INNOVATIVE IDEA</p>
              </div>
            </div>
            <div className="circle-container circle2" data-aos="fade-left">
              <PiNumberCircleTwoThin
                className="circleNum2"
                style={{ height: "70px", width: "70px" }}
              />

              <div className="title-offers">
                <p>CUSTOMER FOCUS</p>
              </div>
            </div>
            <div className="circle-container circle3" data-aos="fade-left">
              <PiNumberCircleThreeThin
                style={{ height: "70px", width: "70px" }}
              />

              <div className="title-offers">
                <p>INTEGRITY</p>
              </div>
            </div>
            <div className="circle-container circle4" data-aos="fade-left">
              <PiNumberCircleFourThin
                style={{ height: "70px", width: "70px" }}
              />

              <div className="title-offers">
                <p>PREMIUM QUALITY</p>
              </div>
            </div>
            <div className="circle-container circle5" data-aos="fade-left">
              <PiNumberCircleFiveThin
                style={{ height: "70px", width: "70px" }}
              />

              <div className="title-offers">
                <p>FOR ALL DISPLAY</p>
              </div>
            </div>
            <div className="circle-container circle6" data-aos="fade-left">
              <PiNumberCircleSixThin
                style={{ height: "70px", width: "70px" }}
              />

              <div className="title-offers">
                <p>RIGHT ON TIME </p>
              </div>
            </div>
            <div className="circle-container circle7" data-aos="fade-left">
              <PiNumberCircleSevenThin
                style={{
                  height: "70px",
                  width: "70px",
                }}
              />

              <div className="title-offers">
                <p>3D SOLUTION </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Video;
