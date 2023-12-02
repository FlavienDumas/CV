import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/sideBar";
import TopBar from "./components/TopBar";

import "./css/global.css";
import "./css/SideBar.css";
import "./css/CardSelf.css";
import "./css/TopBar.css";
import "./css/Home.css";

function App() {

  return (
    <>
      <SideBar/>
      <TopBar/>
      <div className="mainContent">
        <Routes >
          <Route path="/" element={<Home/>}/>*
        </Routes>
      </div>
    </>
  )
}

export default App;
