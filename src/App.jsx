import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Apprentissage from "./pages/Apprentissage";
import "./css/global.css";
import "./css/header.css";
import "./css/navigation.css";
import "./css/home.css";
import "./css/apprentissage.css";

function App() {

  return (
    <>
      <Header/>
      <Navigation/>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/school" element={<Apprentissage/>}/>
      </Routes>
    </>
  )
}

export default App;
