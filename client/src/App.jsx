import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Events from "./components/Event";
import Contact from "./components/Contact";
import Crew from "./components/Crew";
import Workshop from "./components/Workshop";

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Events />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/workshop" element={<Workshop />} />
      </Routes>
    </Router>
  );
}


export default App;
