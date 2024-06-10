import React from "react";

import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { WiStars } from "react-icons/wi";

function Home() {
  return (
    <>
      <div className="home">
        <WiStars className="star-icon" />
        <div className="Blockcontent-1">
          <div className="Heading-1">
            <h1>CREATIVE</h1>
          </div>
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
            <button className="vertical-line-container-1">
              <HiOutlineArrowLongDown className="arrow-down" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Home;
