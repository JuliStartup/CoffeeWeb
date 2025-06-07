"use client";

import { Button } from "@/components/ui/button";
import CirclePattern from "../home/CirclePattern";

export default function PayrollHero() {
  return (
    <section className="relative bg-gradient-to-b from-[#f8f8fb] to-[#f9f8fa] w-full min-h-screen overflow-hidden flex items-center justify-center">
      <CirclePattern />
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="grid min-h-[600px] items-center gap-8 pb-12 pt-16 md:grid-cols-2 md:gap-12 xl:min-h-[700px] xl:py-20">
          <div className="flex flex-col items-center lg:items-start justify-center gap-6 md:pr-10">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="font-twk text-neutral-700 text-7xl md:text-5xl xl:text-6xl leading-tight tracking-tight font-semibold max-w-xl md:max-w-2xl">
                Payroll
                <span className="block font-twk text-neutral-700 text-3xl md:text-5xl xl:text-6xl leading-tight tracking-tight font-semibold max-w-xl md:max-w-2xl">
                  for your Business
                </span>
              </h1>
              <p className="text-lg text-muted-foreground pt-4 sm:text-xl font-twk font-normal">
                Whether you're hiring a contractor in the UK, a team in Brazil,
                or managing payroll across hubs —Deal makes it all possible.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
              <a
                size="lg"
                className="w-full sm:w-auto bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90"
              >
                Get Started Now
              </a>
              <a
                variant="outline"
                size="lg"
                className="bg-white text-black border px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 flex items-center justify-center"
              >
                Sign Up
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:aspect-[3/4] xl:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-background/0 backdrop-blur-[1px]" />
              <div className="bg-white rounded-tl-[32px] shadow-lg rounded-br-[32px] overflow-hidden p-4">
                <img
                  src="./payroll/new.png"
                  alt="Woman working on laptop"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-tl-[32px] rounded-br-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
