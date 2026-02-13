import React from "react";
import "./style/main.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Events from "./components/Event";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Contact />
    </>
  );
}

export default App;
