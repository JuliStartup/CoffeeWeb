"use client";
import React, { useState, useEffect, useMemo } from "react";

function calculateTimeLeft(target) {
  const now = new Date().getTime();
  const distance = target - now;
  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Precompute strings so we only do padStart in one place
  const { days, hours, minutes, seconds } = useMemo(() => {
    return {
      days: timeLeft.days.toString().padStart(2, "0"),
      hours: timeLeft.hours.toString().padStart(2, "0"),
      minutes: timeLeft.minutes.toString().padStart(2, "0"),
      seconds: timeLeft.seconds.toString().padStart(2, "0")
    };
  }, [timeLeft]);

  return (
    <div className="flex items-center gap-1">
      {/* Example: Days */}
      <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
        <div className="text-white text-base font-bold">{days}</div>
        <div className="text-[10px] text-white/80">Days</div>
      </div>
      {/* Hours */}
      <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
        <div className="text-white text-base font-bold">{hours}</div>
        <div className="text-[10px] text-white/80">Hrs</div>
      </div>
      {/* Minutes */}
      <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
        <div className="text-white text-base font-bold">{minutes}</div>
        <div className="text-[10px] text-white/80">Mins</div>
      </div>
      {/* Seconds */}
      <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
        <div className="text-white text-base font-bold">{seconds}</div>
        <div className="text-[10px] text-white/80">Secs</div>
      </div>
    </div>
  );
}

// Wrap in React.memo so it won't re-render unless props (targetDate) changes:
export default React.memo(Countdown);
