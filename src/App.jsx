import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { useState, useEffect } from "react";

import "./css/global.css";
import "./css/animations.css";
import "./css/SideBar.css";
import "./css/TopBar.css";
import "./css/Home.css";
import "./css/Projets.css";
import "./css/CardContent.css";

function App() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(null);

  useEffect(() => {
    setPrevLocation(location);
  }, [location]);

  return (
    <>
      <SideBar/>
      <TopBar/>
      <div className="mainContent">
        <Routes location={prevLocation || location}>
            <Route path="/CV/" element={<Home/>}/>
            <Route path="/CV/Projets" element={<Projets/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
