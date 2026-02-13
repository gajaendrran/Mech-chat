import React, { useEffect, useState } from "react";
import "../style/countdown.css";

export default function Countdown() {
  // 🔥 Set your event date here
  const eventDate = new Date("March 12, 2026 09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <TimeBox value={timeLeft.days} label="DAYS" />
      <TimeBox value={timeLeft.hours} label="HOURS" />
      <TimeBox value={timeLeft.minutes} label="MINUTES" />
      <TimeBox value={timeLeft.seconds} label="SECONDS" />
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <h2>{value.toString().padStart(2, "0")}</h2>
      <span>{label}</span>
    </div>
  );
}
