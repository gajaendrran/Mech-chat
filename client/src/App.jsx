import React, { useState, useRef } from "react";
import { FaSmile, FaFrown } from "react-icons/fa";
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
      <Hero />
      <About />
      <Events />
      <Contact />
    </>
  );
}

function App() {
  const [startIntro, setStartIntro] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });
  const [isNoMoving, setIsNoMoving] = useState(false);
  const videoRef = useRef(null);

  const moveNoButton = () => {
  setIsNoMoving(true);

  const randomTop = Math.random() * 80;
  const randomLeft = Math.random() * 80;

  setNoPosition({
    top: `${randomTop}%`,
    left: `${randomLeft}%`,
  });
};


  // Start intro video
  const handleEnter = () => {
    setStartIntro(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 1; // start from 1 second
        videoRef.current.play(); // play with sound
      }
    }, 100);
  };

  // Stop video at 6.5 seconds
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 6.5) {
      videoRef.current.pause();
      setShowIntro(false);
    }
  };

  // Funny Intro Screen
  if (!startIntro) {
  return (
    <div className="intro-container funny-intro">
      <h1 className="funny-title">
         Are you excited to explore MEKCHAT-26?
      </h1>

      <div className="funny-buttons">
        <button className="yes-btn" onClick={handleEnter}>
          YES <FaSmile className="emoj-icon"/>
        </button>

        <button
          className={`no-btn ${isNoMoving ? "moving" : ""}`}
          style={
            isNoMoving
              ? {
                  top: noPosition.top,
                  left: noPosition.left,
                }
              : {}
          }
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
        >
          NO <FaFrown className="emoj-icon"/>
        </button>
      </div>
    </div>
  );
}


  // Video Intro Screen
  if (showIntro) {
    return (
      <div className="intro-container">
        <video
          ref={videoRef}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setShowIntro(false)}
          className="intro-video"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  // Main Website
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
