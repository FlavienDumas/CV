import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/sideBar";

import "./css/global.css";
import "./css/SideBar.css";
import "./css/CardSelf.css";

function App() {

  return (
    <>
      <SideBar/>
      <Routes >
        <Route path="/" element={<Home/>}/>*
      </Routes>
    </>
  )
}

export default App;
