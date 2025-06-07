"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlurText from "./BlurText";
import CirclePattern from "./CirclePattern";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-[#f8f8fb] to-[#f9f8fa] w-full min-h-screen overflow-hidden flex items-center justify-center">
      <CirclePattern />
      <div className="relative container mx-auto max-w-7xl px-4 py-8 grid xl:grid-cols-2 gap-24 md:gap-[6] items-center">
        <div className="space-y-8 md:space-y-4 text-center xl:text-left">
          <h1>
            <BlurText
              text="Streamline your business processes"
              delay={50}
              animateBy="words"
              direction="top"
              className="font-twk text-neutral-800 text-5xl md:text-5xl xl:text-7xl leading-[1.1] md:leading-tight tracking-tight font-semibold max-w-xl md:max-w-2xl mx-auto xl:mx-0 mt-[0vh] sm:mt-0"
            />
          </h1>
          <div className="flex flex-col md:flex-row max-w-md gap-4 pt-4 mx-auto xl:mx-0 items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white flex-grow px-3 py-6 border-b-2 text-sm"
            />

            <a className="w-full py-4 bg-[--primaryColor] rounded-lg font-twk font-semibold text-white text-center text-sm">
              Start Free Trial
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] bg-white rounded-xl shadow-lg p-1 md:p-3">
          <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-3 gap-0.5 h-full">
            <div className="col-span-1 md:col-span-7 row-span-3 relative rounded-lg overflow-hidden border-4 border-white shadow-md">
              <img
                src="./wer.jpg"
                alt="Person working on laptop"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}