"use client";
import React, { useState, memo } from "react";
import Countdown from "./Countdown"; // import the child component

const targetDate = new Date("Mar 30, 2025 18:00:00").getTime();

function TopBanner() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="top_banner w-full bg-[--purple] py-1 hidden xl:block">
      <div className="w-full px-2 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Countdown component */}
          <Countdown targetDate={targetDate} />

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
}

// Wrap with memo:
export default memo(TopBanner);
