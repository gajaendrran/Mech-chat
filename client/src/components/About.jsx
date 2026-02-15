import React, { useEffect } from "react";
import { FaUsers, FaLightbulb, FaBullseye } from 'react-icons/fa';
import ScrollReveal from "scrollreveal";
import "../style/about.css";

export default function About() {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "0px",   // No slide
      duration: 1000,
      easing: "ease-in-out",
      reset: false
    });

    sr.reveal(".about-subtitle", { delay: 200 });
    sr.reveal(".about-title", { delay: 300 });
    sr.reveal(".about-description", { delay: 400 });

    sr.reveal(".about-card", {
      delay: 500,
      interval: 200   // stagger cards
    });

  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">

        <h5 className="about-subtitle">WHO WE ARE</h5>

        <h2 className="about-title">
          About <span>MekChat'26</span>
        </h2>

        <p className="about-description">
          MekChat'26 is a National Level Technical Symposium organized by the Department of Mechanical Engineering.
          This prestigious event brings together students from diverse institutions nationwide to compete, collaborate, and celebrate innovation.
          From intense technical challenges to creative non-technical events, MekChat offers something for every aspiring engineer.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="icon-box">
              <FaBullseye />
            </div>
            <h3>Innovation</h3>
            <p>
              Pushing the boundaries of mechanical engineering through
              cutting-edge technology.
            </p>
          </div>

          <div className="about-card">
            <div className="icon-box">
              <FaLightbulb />
            </div>
            <h3>Knowledge</h3>
            <p>
              A platform to learn, compete, and showcase your technical prowess.
            </p>
          </div>

          <div className="about-card">
            <div className="icon-box">
              <FaUsers />
            </div>
            <h3>Networking</h3>
            <p>
              Connect with brilliant minds from colleges across the nation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
