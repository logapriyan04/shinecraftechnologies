import React, { useEffect, useState } from "react";
import logoTop from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [name, setName] = useState("Home");

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setScrolling(true);
        setName("Home");
      }
      if (window.scrollY >= 600) {
        setScrolling(true);
        setName("About");
      }
      if (window.scrollY >= 1000) {
        setScrolling(true);
        setName("Service");
      }
      if (window.scrollY >= 2750) {
        setScrolling(true);
        setName("Portfolio");
      }
      if (window.scrollY >= 3700) {
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

  const navBarClassName = scrolling ? "nav__link active blacl-bg" : "nav__link";

  return (
    <>
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
        <div>
          <div className="hamburger" onClick={toggleNav}>
            <RxHamburgerMenu className="hamburger-menu" />
          </div>
          {isNavOpen && (
            <div className="navigation">
              {/* Your navigation links go here */}
            </div>
          )}
        </div>

        <div className="Nav">
          <ul class="nav__list">
            <li class={navBarClassName}>
              <a
                href="Home"
                className={name === "Home" ? "nav__link active" : "nav__link"}
              >
                HOME
              </a>
            </li>
            <li class={navBarClassName}>
              <a
                href="#About"
                className={name === "About" ? "nav__link active" : "nav__link"}
              >
                ABOUT
              </a>
            </li>
            <li class={navBarClassName}>
              <a
                href="#service"
                className={
                  name === "Service" ? "nav__link active" : "nav__link"
                }
              >
                SERVICES
              </a>
            </li>
            <li class={navBarClassName}>
              <a
                href="#Portfolio"
                className={
                  name === "Portfolio" ? "nav__link active" : "nav__link"
                }
              >
                PORTFOLIO
              </a>
            </li>

            <li>
              <a
                href="#Contact"
                className={
                  name === "Contact" ? "nav__link active" : "nav__link"
                }
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
