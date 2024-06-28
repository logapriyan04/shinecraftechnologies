import React, { useEffect } from "react";
import logo2 from "../Assests/images/logo.png";
import logo3 from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
import profile from "../Assests/images/logo.png";
import ProjectL from "../Assests/images/image1.jpg";
import ProjectC from "../Assests/images/image2.jpeg";
import ProjectR from "../Assests/images/image4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Endpage from "./Endpage";
import { Link } from "react-router-dom";

const ProjectsData = [
  { id: "1", name: "Home Automation", image: ProjectL },
  { id: "2", name: "Vending Machine", image: ProjectC },
  { id: "3", name: "Electrical cycle ", image: ProjectR },
];

function Profile1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Portfolio1" style={{ width: "100vw" }}>
      <div className="logo-nav">
        <div className="logo-2">
          <div className="logo">
            <img
              src={logo2}
              alt="Logo"
              className="logo2"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="logo-Name">
            <img src={logoRight} alt="logoRight" className="logo-RightName" />
            <img src={logoLeft} alt="logoleft" className="logo-LeftName" />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <button className="btn-3">DRIVE</button>
            <button className="btn-4">CV</button>
          </div>
        </div>
        <div class="nav-2">
          <ul class="list-2">
            <li class="li-list">Linkdin</li>
            <li class="li-list">
              <Link to="/Firstpage">
                {" "}
                <a href="/Firstpage">HOME</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------------------- */}
      <div className="main-content" data-aos="fade-up">
        <div className="profile">
          <img
            src={profile}
            alt="profile"
            className="profile"
            style={{ height: "150px", width: "150px" }}
          />
        </div>
        <div className="main-conntent-1">
          <h1>Hi! Meets AJITH KUMAR V</h1>
          <h2>
            {" "}
            Founder-Product Development Engineer,<br></br> Electronic Systems
          </h2>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="profile-projects" data-aos="fade-up">
        <h2>PROJECTS</h2>
        <div className="Project-page1">
          {ProjectsData.map((item) => {
            return (
              <div className="imgCon" key={item.id}>
                <div>
                  <text
                    className="Project-Name"
                    style={{
                      position: "absolute",
                      marginLeft: "1%",
                      marginTop: "20%",
                      borderRadius: "30px",
                      textAlign: "center",
                      color: "black",
                      zIndex: 1,
                      backgroundColor: "gray",
                      padding: "12px 50px",
                    }}
                  >
                    {item.name}
                  </text>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt="ProjecImage"
                    height={"330px"}
                    width={"270px"}
                    style={{
                      border: "none",
                      borderRadius: "15px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* --------------------- */}
      <div className="Experiance" style={{ paddingTop: "5%" }}>
        <div className="Head-1">
          <div className="first-head">
            <h3>WHAT A</h3>
          </div>
          <h1>YEAR</h1>
        </div>
        <div className="Container-scroll">
          <div className="line-1" data-aos="fade-up"></div>
          <div className="scroll-name" data-aos="fade-up">
            <h1>scroll</h1>
          </div>
          <div className="line-3"></div>
          <div className="horz-line-2"></div>
        </div>
        {/* --- */}
        <div className="timeline">
          <div className="Year-1">
            <h2>2017 - 2018</h2>
          </div>

          <div className="vert-left-1"></div>
          <div className="first-p">
            <p style={{ paddingLeft: "5%" }}>
              {" "}
              My role is to design and develop the product,<br></br> covering
              aspects from ideation, prototyping,<br></br> design, and
              commercialization. Below are the domains.<br></br> I have worked
              on during product development.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-1"></div>
        </div>
        {/*  */}
        <div className="timeline-1">
          <div className="first-p">
            <p style={{ paddingLeft: "5%" }}>
              {" "}
              My role is to design and develop the product,<br></br> covering
              aspects from ideation, prototyping,<br></br> design, and
              commercialization. Below are the domains.<br></br> I have worked
              on during product development.
            </p>
          </div>
          <div className="vert-right"></div>
          <div className="Year-2">
            <h2>2017 - 2018</h2>
          </div>
          <div className="content-1">
            <h6>
              PRODUCT DEVELOPMENT ENGINEER <br></br>TECHTIL INFO SOLUTION
            </h6>
          </div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-2"></div>
        </div>
        {/*  */}
        <div className="timeline-2">
          <div className="content-2">
            <h6>
              PROJECT MANAGER <br></br>APPIKORN
            </h6>
          </div>
          <div className="Year-3">
            <h2>2017 - 2018</h2>
          </div>
          <div className="vert-left-1"></div>
          <div className="first-p">
            <p style={{ paddingLeft: "5%" }}>
              {" "}
              My role is to design and develop the product,<br></br> covering
              aspects from ideation, prototyping,<br></br> design, and
              commercialization. Below are the domains.<br></br> I have worked
              on during product development.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-3"></div>
        </div>
        {/*  */}
        <div className="timeline-1">
          <div className="first-p">
            <p style={{ paddingLeft: "5%" }}>
              {" "}
              My role is to design and develop the product,<br></br> covering
              aspects from ideation, prototyping,<br></br> design, and
              commercialization. Below are the domains.<br></br> I have worked
              on during product development.
            </p>
          </div>
          <div className="vert-right-1"></div>
          <div className="Year-4">
            <h2>2017 - 2018</h2>
          </div>
          <div className="content-1">
            <h6>
              CO FOUNDER AND COO <br></br>SCOPIP
            </h6>
          </div>
          {/*  */}
        </div>
        <div className="horz-line">
          <div className="horz-line-3"></div>
        </div>
        <div className="horz-ver">
          <div className="content-3">
            <h6>
              PRODUCT DEVELOPMENT ENGINEER <br></br>CHEMIN C&I Pvt Ltd APPIKORN
            </h6>
          </div>
          <div className="line-4"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-4"></div>
        </div>
        <div className="box-1">
          <div className="vert-left-2">
            <img
              src={logo3}
              alt="Logo"
              className="logo3"
              style={{ height: "150px", width: "150px" }}
            />
            <div className="logo-Name-1">
              <img src={logoRight} alt="logoRight" className="logo-RightName" />
              <img src={logoLeft} alt="logoleft" className="logo-LeftName" />
            </div>
            <div className="Year-5">
              <h2>2017 - 2018</h2>
            </div>
            <div className="content-4">
              <h6>
                FOUNDER <br></br>APPIKORN
              </h6>
            </div>
          </div>
          <div className="vert-right-2"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-5"></div>
        </div>
        {/*  */}
        <div className="horz-ver">
          <div className="line-5"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-6"></div>
        </div>
        {/*  */}
        <div className="box-2">
          <div className="vert-left-3">
            <div className="Head-2">
              <div className="second-head">
                <h3>WHAT A</h3>
              </div>
              <h1>YEAR</h1>
            </div>
          </div>
          <div className="vert-right-3"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-7"></div>
        </div>
        {/*  */}
      </div>
      <Endpage />
    </div>
  );
}
export default Profile1;
