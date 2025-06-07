"use client";

import React, { useState, useEffect } from "react";

// Set the target date to March 30, 2025
const targetDate = new Date("Mar 30, 2025 18:00:00").getTime();

const TopBannerW = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="top_banner w-full bg-[--purple] py-1 hidden md:block">
      <div className="w-full px-2 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Countdown Timer */}
          <div className="flex items-center gap-1 w-full md:w-auto justify-center md:justify-start">
            <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
              <div className="text-white text-base font-bold">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] text-white/80">Days</div>
            </div>
            <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
              <div className="text-white text-base font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] text-white/80">Hrs</div>
            </div>
            <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
              <div className="text-white text-base font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] text-white/80">Min</div>
            </div>
            <div className="time-block bg-[#2b1738] rounded-md px-2 py-1 text-center">
              <div className="text-white text-base font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] text-white/80">Sec</div>
            </div>
          </div>

          {/* Promotional Text */}
          <div className="hidden md:block w-full md:w-auto text-center">
            <p className="bg-[#2b1738] font-twk font-medium text-white rounded-lg p-2">
              GET 6 MONTHS FREE{" "}
              <span className="font-normal">ON YOUR FIRST MODULE</span>
            </p>
          </div>

          {/* Email Signup */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full md:w-auto justify-center md:justify-end"
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              className="text-white p-2 text-center border-0 text-sm w-full md:w-48"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-[--purple] px-4 py-1 font-medium text-sm bg-gray-100"
            >
              Claim Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopBannerW;
