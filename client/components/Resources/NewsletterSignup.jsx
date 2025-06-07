"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlurText from "../home/BlurText";

export default function NewsletterSignup() {
  return (
    <div className="bg-gradient-to-b from-[#f8f8fb] to-[#f9f8fa]">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8 md:pt-32 md:pb-22 xl:pt-40 xl:pb-20">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <BlurText
              text="Support human stories"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-3xl pt-6 md:text-4xl xl:text-5xl text-neutral-900 mb-6 font-medium font-twk"
            />
            <p className="text-lg text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare eros ante.
            </p>
            <div className="flex gap-2 flex-col md:flex-row">
              <a
                variant="default"
                className="bg-[--primaryColor] text-white px-6 cursor-pointer py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg  w-full md:w-auto"
              >
                Upgrade
              </a>
              <a
                variant="outline"
                className="bg-white text-black border px-6 py-3 cursor-pointer rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-gray-200"
              >
                View plans
              </a>
            </div>
          </div>

          {/* Right column - Newsletter signup */}
          <div className="rounded-lg p-6">
            <div className="max-w-sm">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-yellow-100 rounded-full">
                <span className="text-xs font-mediumtext-yellow-700">
                  Member-only story
                </span>
              </div>
              <h3 className="text-lg font-medium pt-2 text-neutral-900 mb-2">
                Stay updated and be the first to hear of promotions.
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                We’ll keep you in the loop with everything that is going on at
                CoffeeStore.
              </p>
              <form className="flex gap-2 flex-col md:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white flex-grow px-4 py-[24px] border-b-2"
                />
                <a
                  type="submit"
                  className="bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90  w-full md:w-auto"
                >
                  →
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
