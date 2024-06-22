import React, { useEffect } from "react";

import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { WiStars } from "react-icons/wi";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="home" id="Home" data-aos="fade-up">
        <WiStars className="star-icon" />
        <div className="Blockcontent-1">
          <h1>CREATIVE</h1>
        </div>
        <div className="Blockcontent-2">
          <div className="para-1">
            <small>
              Lorem is the simple dummy text for the printing and<br></br>{" "}
              texting industury, Lorem has industury dummy<br></br> text for the
              industury since 1500
            </small>
          </div>
          <div className="Heading-3">
            <h1>STUDIO</h1>
          </div>
        </div>

        <div>
          <a href="#About">
            <button className="vertical-line-container-3">
              <HiOutlineArrowLongDown className="arrow-down" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Home;
