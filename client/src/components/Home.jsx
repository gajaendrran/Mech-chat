import React from "react";
import Countdown from "./CountDown";
import '../style/home.css';

export default function Hero() {
  return (
    <section id="home" className="hero ">
      <div className="grid-bg"></div>
      <div className="hero-content">
        <h4>NATIONAL LEVEL TECHNICAL SYMPOSIUM</h4>
        <h1>
          MECH<span>CHAT'26</span>
        </h1>
        <p><b>Department of Mechanical Engineering</b></p>
        <p>Machines take me by surprise by great frequency</p>

        <div className="btn-group">
          <a href="#events" className="btn btn-primary">EXPLORE EVENTS</a>
          <a href="#about" className="btn btn-outline">LEARN MORE</a>
          <a href="#workshop" className="btn btn-outline">WORKSHOP</a>
        </div>
        <Countdown/>
      </div>
    </section>
  );
}
