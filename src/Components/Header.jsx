import React, { useState, useEffect } from "react";
import logoTop from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
// import Slider from "react-slick";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [name, setName] = useState("Home");
  const [isSideOpen, setIsSideOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 0 && scrollY < 600) {
        setScrolling(true);
        setName("Home");
      } else if (scrollY >= 600 && scrollY < 1000) {
        setScrolling(true);
        setName("About");
      } else if (scrollY >= 1000 && scrollY < 2750) {
        setScrolling(true);
        setName("Service");
      } else if (scrollY >= 2750 && scrollY < 4550) {
        setScrolling(true);
        setName("Portfolio");
      } else if (scrollY >= 4550) {
        setScrolling(true);
        setName("Contact");
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsSideOpen(!isSideOpen);
  };

  const navBarClassName = scrolling ? "nav__link active black-bg" : "nav__link";

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Top-Header">
      <div className="Left-navbar">
        <div className="logo-Header">
          <img src={logoTop} alt="Logo" className="logo-top" />
        </div>
        <div className="logo-Name">
          <img src={logoRight} alt="logoRight" className="logo-RightName" />
          <img src={logoLeft} alt="logoleft" className="logo-LeftName" />
        </div>
      </div>

      <div className="Nav">
        {isSideOpen && (
          <ul className="sidebar">
            <IoClose className="close-sidebar" onClick={toggleNav} />

            {["Home", "About", "service", "Portfolio", "Contact"].map(
              (section) => (
                <li className={navBarClassName} key={section}>
                  <Link
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={toggleNav}
                  >
                    {section.toUpperCase()}
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
        <ul className="nav__list">
          {["Home", "About", "service", "Portfolio", "Contact"].map(
            (section) => (
              <li className={navBarClassName} key={section}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={
                    name === section ? "nav__link active" : "nav__link"
                  }
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            )
          )}
        </ul>

        <RxHamburgerMenu className="Open-sidebar" onClick={toggleNav} />
      </div>

      {/* <Slider {...settings}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider> */}
    </div>
  );
}

export default Header;
