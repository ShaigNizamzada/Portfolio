import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
