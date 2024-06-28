// import "./App.css";

import Home from "./Components/Home";

import "./Styles/Style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Firstpage from "./Components/Firstpage";
import Profile1 from "./Components/Profile1";
import Secondprofile from "./Components/Secondprofile";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/Firstpage" Component={Firstpage}></Route>

            <Route path="/Profile1" Component={Profile1}></Route>
            <Route path="/Secondprofile" Component={Secondprofile}></Route>
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
