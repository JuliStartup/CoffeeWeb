"use client";
import React from "react";
import BlurText from "./BlurText";

const Section3 = () => {
  return (
    <div className="bg-gradient-to-b from-[#faf9fa] to-[#fbf9f9] flex flex-col md:flex-row items-center justify-center py-16 px-4">
      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left md:mr-8 xl:mr-12 mb-8 md:mb-0">
        <h1>
          <BlurText
            text="Get more done."
            delay={50}
            animateBy="words"
            direction="top"
            className="font-twk text-neutral-800 text-5xl md:text-5xl xl:text-6xl leading-tight font-semibold max-w-xl mb-4"
          />
        </h1>
        <div className="flex items-center justify-center">
          <BlurText
            text="Reclaim time by moving away from disconnected processes and integrating all your functions onto one platform."
            delay={50}
            animateBy="words"
            direction="top"
            className="font-twk text-[1rem] md:text-xl text-neutral-500 w-[80%] sm:w-[100%] max-w-lg mb-6"
          />
        </div>
        <div className="flex  flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 w-full sm:w-auto">
            GET STARTED
          </button>
          <button className="bg-white text-neutral-800 px-6 py-3 rounded-lg border border-neutral-800 hover:bg-neutral-100 transition duration-300 font-twk font-semibold text-lg w-full sm:w-auto">
            Get a Demo
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
        <img
          src="/stock/h4.png"
          alt="Profile"
          className="xl:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Section3;
