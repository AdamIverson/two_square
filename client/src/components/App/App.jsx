import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Uploader from "../Uploader/Uploader";
import Italy from "../Italy/Italy";
import Google from "../GoogleDrive/GoogleDrive";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/google" element={<Google />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/italy" element={<Italy />}></Route>
          <Route exact path="/uploader" element={<Uploader />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
