import React from "react";
import Home from "./Home";
import Services from "./Services";
// import Portfolio from "./Profile1";
import Video from "./Video";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function Firstpage() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Video />
      <Contact />
      <Footer />
    </div>
  );
}

export default Firstpage;
