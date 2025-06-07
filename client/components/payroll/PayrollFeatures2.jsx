"use client";

import { Button } from "@/components/ui/button";
import CirclePattern2 from "./CirclePattern2";

export default function PayrollFeatureSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f8f8fb] to-[#f9f8fa] w-full py-12 md:py-24 xl:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="grid gap-8 xl:grid-cols-2 xl:gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-twk text-neutral-700 text-4xl md:text-5xl xl:text-6xl leading-tight tracking-tight font-semibold max-w-xl md:max-w-2xl">
                Run accurate, on-time payroll easily
              </h2>
            </div>

            <div className="grid p-0 lg:p-6 gap-16 lg:gap-8">
              {/* Core Payroll */}
              <FeatureItem
                title="Core Payroll"
                description="Process payroll, taxes, and other essential functions. Pay out every type of payment within your organization with ease while staying in total compliance."
              />

              {/* Time Management */}
              <FeatureItem
                title="Time Management"
                description="Save time and eliminate errors by connecting payroll with time, cost, PTO, and overtime management to ensure that your time management admin flows fit."
              />

              {/* Leave Management */}
              <FeatureItem
                title="Leave Management"
                description="Automatically sync schedules with time management to reduce manual tasks and streamline workflows while using our AI-powered schedule predictions."
              />
            </div>

            <div className="pt-2">
              <a
                size="lg"
                className="bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 w-full sm:w-auto"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Decorative Pattern */}
          <div className="hidden xl:block relative w-full h-full">
            <CirclePattern2 />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, description }) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">
      <div className="w-[90%] lg:w-36 p-4 h-14 lg:h-28 bg-[--purple] flex items-center justify-center shrink-0 rounded">
        <span className="text-[1.1rem] text-white lg:text-xl font-medium text-center">
          {title}
        </span>
      </div>
      <div className="space-y-2">
        <p className="text-[1rem] lg:text-lg text-gray-700 font-twk">{description}</p>
      </div>
    </div>
  );
}
