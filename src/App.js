import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ! =========== SESI 1 ===============
// import Introduction from "./components/introduction";
// import Profile from "./components/profile";
// import MyButton from "./components/myButton";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// ? =========== SESI 2 ===============
// import Navigator from "./components/navigator";
// import React, { useState } from "react";

function App() {
  // ! =========== SESI 1 ===============
  // const navText = "Dea Afrizal";
  // const clicked = () => {
  //   return alert("Button di pencet");
  // };
  // const paragraf = () => {
  //   return (
  //     <div>
  //       <i>Mantap Bang</i>
  //       <marquee>Dea Afrizal</marquee>
  //     </div>
  //   );
  // };
  // return (
  //   <div>
  //     <Profile />
  //     <Navbar test={navText} />
  //     <Introduction name="Soy" />
  //     <Introduction name="Milk" />
  //     <MyButton clicked={clicked} />
  //     <Footer paragraf={paragraf} />
  //   </div>
  // );
  // ? =========== SESI 2 ===============
  // const [getNavbarValue, setNavbarValue] = useState("");
  // const changeNavbarValue = () => {
  //   setNavbarValue("My Contact");
  // };
  // const traceButton = () => {
  //   alert("Ini Alert dari button ubah navigasi");
  //   console.log("Button di Klik");
  // };
  // return (
  //   <div>
  //     <Navigator navbarValue={getNavbarValue} />
  //     <h1>INI HOMEPAGE</h1>
  //     <button onClick={() => traceButton()}>Trace Button</button>
  //     <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
  //   </div>
  // );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
