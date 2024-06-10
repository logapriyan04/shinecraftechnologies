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

function Video() {
  return (
    <div className="offers-container">
      <div className="Offers">
        <div>
          <div className="Offers-heading">
            <h1>WHY CHOOSE US</h1>
          </div>
          <div className="Offer-para-1">
            <div className="vertical-line"></div>
            <p>
              Shine Craft Technologies is a cutting-edge company,<br></br>{" "}
              dedicated to brighten the future through innovative<br></br>{" "}
              technology and exceptional craftsmanship. <br></br>We specialize
              to provide a comprehensive range of services<br></br> and products
              designed to help businesses and individuals <br></br>to thrive in
              the digital age.
            </p>
          </div>
        </div>
        <div className="circles">
          <div className="container-1">
            <div className="circle-container circle1">
              <div className="Offers-circle ">
                <PiNumberCircleOneThin
                  className="circle1"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <div className="title-offers1">
                <p>INNOVATIVE IDEA</p>
              </div>
            </div>
            <div className="circle-container circle2">
              <div className="Offers-circle ">
                <PiNumberCircleTwoThin
                  className="circle2"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <div className="title-offers2">
                <p>CUSTOMER FOCUS</p>
              </div>
            </div>
            <div className="circle-container circle3">
              <div className="Offers-circle ">
                <PiNumberCircleThreeThin
                  className="circle3"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <div className="title-offers3">
                <p>INTEGRITY</p>
              </div>
            </div>
            <div className="circle-container circle4">
              <div className="Offers-circle ">
                <PiNumberCircleFourThin
                  className="circle4"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <div className="title-offers4">
                <p>PREMIUM QUALITY</p>
              </div>
            </div>
            <div className="circle-container circle5">
              <div className="Offers-circle ">
                <PiNumberCircleFiveThin
                  className="circle5"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <div className="title-offers5">
                <p>FOR ALL DISPLAY</p>
              </div>
            </div>
            <div className="circle-container circle6">
              <div className="Offers-circle ">
                <PiNumberCircleSixThin
                  className="circle6"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <div className="title-offers6">
                <p>RIGHT ON TIME </p>
              </div>
            </div>
            <div className="circle-container circle7">
              <div className="Offers-circle ">
                <PiNumberCircleSevenThin
                  className="circle7"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <div className="title-offers7">
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
