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
          <h1>
            CRAFTING <br></br>{" "}
            <span
              style={{ color: "rgba(71, 79, 122, 255)", paddingLeft: "45%" }}
            >
              TECHNOLOGIES
            </span>
          </h1>
        </div>
        <div className="Blockcontent-2">
          <p style={{ textAlign: "center", wordSpacing: "2em" }}>
            {" "}
            CREATE | CRAFT | CONNECT
          </p>
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
