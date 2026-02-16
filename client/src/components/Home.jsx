import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import Countdown from "./CountDown";
import '../style/home.css';
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "60px",
      duration: 1200,
      delay: 200,
      reset: false, // animation happens only once
      easing: "ease-in-out"
    });

    sr.reveal(".hero-subtitle", { delay: 200 });
    sr.reveal(".hero-title", {
      origin: "left",
      distance: "80px"
    });

    // sr.reveal(".hero-title", { delay: 400 });
    sr.reveal(".hero-text", { delay: 600 });
    sr.reveal(".btn-group", { delay: 800 });
    /* sr.reveal(".btn-group", {
  scale: 0.85
}); */
    sr.reveal(".countdown-wrapper", { delay: 1000 });

  }, []);

  return (
    <section id="home" className="hero">
      <div className="grid-bg"></div>

      <div className="hero-content">
        <h4 className="hero-subtitle">
          NATIONAL LEVEL TECHNICAL SYMPOSIUM
        </h4>

        <h1 className="hero-title">
          MEK<span>CHAT'26</span>
        </h1>

        <p className="hero-text">
          <b>Department of Mechanical Engineering</b>
        </p>

        <p className="hero-text">
          Machines take me by surprise by great frequency
        </p>

        <div className="btn-group">
          <a href="#events" className="btn btn-primary">
            EXPLORE EVENTS
          </a>

          <a href="#about" className="btn btn-outline">
            LEARN MORE
          </a>

          <Link to="/workshop" className="btn btn-outline">
            WORKSHOP
          </Link>
          <button
            className="btn btn-outline"
            onClick={() => {
              navigate("/workshop");
              setTimeout(() => {
                document
                  .getElementById("accommodation")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 200);
            }}
          >
            ACCOMMODATION
          </button>
        </div>
        <div className="countdown-wrapper">
          <Countdown />
        </div>

      </div>
    </section>
  );
}
