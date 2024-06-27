import React from "react";
import logo2 from "../Assests/images/logo.png";
import profile from "../Assests/images/logo.png";
import ProjectL from "../Assests/images/image1.jpg";
import ProjectC from "../Assests/images/image2.jpeg";
import ProjectR from "../Assests/images/image4.jpg";

const ProjectsData = [
  { id: "1", name: "Home Automation", image: ProjectL },
  { id: "2", name: "Vending Machine", image: ProjectC },
  { id: "3", name: "E-Cycle", image: ProjectR },
];
function Portfolio() {
  return (
    <div className="Portfolio1">
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
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn-3">DRIVE</button>
            <button className="btn-4">CV</button>
          </div>
        </div>
        <div className="nav-2">
          <ul className="list-2" style={{ display: "flex", gap: "20px" }}>
            <li className="li-list" style={{ wordSpacing: "10px" }}>
              Linkdin /
            </li>
            <li className="li-list" style={{ wordSpacing: "10px" }}>
              Linkdin /
            </li>
            <li className="li-list" style={{ wordSpacing: "10px" }}>
              Linkdin
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------------------- */}
      <div className="main-content">
        <div className="profile">
          <img
            src={profile}
            alt="profile"
            className="profile"
            style={{ height: "150px", width: "150px" }}
          />
        </div>
        <div>
          <h1>Hi! Meets AJITH KUMAR V</h1>
          <h2>
            {" "}
            Founder-Product Development Engineer,<br></br> Electronic Systems
          </h2>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="profile-projects">
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
                      paddingLeft: "3%",
                      paddingTop: "3%",
                      textAlign: "center",
                      color: "black",
                      zIndex: 1,
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
      <div class="timeline-container">
        <div class="timeline">
          <div class="sec">
            <div class="line-ver first"></div>
            <div class="scroll">
              <div class="scroll-text">
                <h4 class="cc-scroll">SCROLL</h4>
              </div>
            </div>
          </div>
          {/* -- */}
          <div class="line-ver short"></div>
          <div class="text margin-left">
            <h3>JAN</h3>
            <h4>hello</h4>
          </div>
          <div class="line-hor origin-left"></div>
          <div class="text margin-left top">
            <p>
              China identified a new virus that had infected dozens of people in
              Asia
            </p>
          </div>

          <div class="line-ver"></div>
          <div class="text margin-right">
            <h3>2021 - 2022 </h3>
            <h4></h4>
          </div>
          <div class="line-hor-1 origin-left"></div>
          <div class="text margin-right top" style={{ marginTop: "25%" }}>
            <h2>
              {" "}
              PROJECT MANAGER<br></br> 
              <span style={{ fontSize: "10px" }}>APPIKORN</span>{" "}
            </h2>
            <p>
              {" "}
              China identified a new virus that had infected dozens of people in
              Asia
            </p>
          </div>
          {/*  */}

          <div class="line-ver-2"></div>
          <div class="text margin-left-1">
            <h3>JAN</h3>
            <h4>hello</h4>
          </div>
          <div class="line-hor-2 origin-left"></div>
          <div class="text margin-left top">
            <p>
              The World Health Organization declared a global health emergency.
            </p>
          </div>
          {/*  */}
          <div class="line-ver"></div>
          <div class="text margin-right">
            <h3>FEB</h3>
            <h4>hello</h4>
          </div>
          <div class="line-hor-1 origin-left"></div>
          <div class="text margin-right top">
            <p>
              The World Health Organization declared a global health emergency.
            </p>
          </div>
          {/*  */}
          <div class="line-ver-2"></div>
          <div class="text margin-left-1">
            <h3>JAN</h3>
            <h4>hello</h4>
          </div>
          <div class="line-hor-2 origin-left"></div>
          <div class="text margin-left top">
            <p>
              The World Health Organization declared a global health emergency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
