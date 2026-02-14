import React from "react";
import {FaUsers,FaLightbulb,FaBullseye} from 'react-icons/fa'
import "../style/about.css"
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <h5 className="about-subtitle">WHO WE ARE</h5>

        <h2 className="about-title">
          About <span>MechChat'26</span>
        </h2>

        <p className="about-description">
         MechChat'26 is a National Level Technical Symposium organized by the Department of Mechanical Engineering. 
         This prestigious event brings together students from diverse institutions nationwide to compete, collaborate, and celebrate innovation. 
         From intense technical challenges to creative non-technical events, MechChat offers something for every aspiring engineer.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="icon-box">
              <FaBullseye/>
            </div>
            <h3>Innovation</h3>
            <p>
              Pushing the boundaries of mechanical engineering through 
              cutting-edge technology.
            </p>
          </div>

          <div className="about-card">
            <div className="icon-box">
              <FaLightbulb/>
            </div>
            <h3>Knowledge</h3>
            <p>
              A platform to learn, compete, and showcase your technical prowess.
            </p>
          </div>

          <div className="about-card">
            <div className="icon-box">
              <FaUsers/>
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
