import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/sideBar";
import TopBar from "./components/TopBar";

import "./css/global.css";
import "./css/SideBar.css";
import "./css/CardSelf.css";
import "./css/TopBar.css";

function App() {

  return (
    <>
      <SideBar/>
      <TopBar/>
      <Routes >
        <Route path="/" element={<Home/>}/>*
      </Routes>
    </>
  )
}

export default App;
