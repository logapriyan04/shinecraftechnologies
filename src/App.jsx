import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import Home from "./Components/Home";

import About from "./Components/About";
import Header from "./Components/Header";
import Services from "./Components/Services";
import "./Styles/Style.css";
import Portfolio from "./Components/Portfolio";
import Video from "./Components/Video";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
    </>
  );
}

export default App;
