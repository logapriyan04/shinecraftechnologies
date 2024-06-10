import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./Components/Home";

import About from "./Components/About";
import Header from "./Components/Header";
import "./Styles/Style.css";
import { RxHome } from "react-icons/rx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
