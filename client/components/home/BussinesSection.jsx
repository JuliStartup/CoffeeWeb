"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { gsap } from "gsap";

const features = [
  {
    title: "All-in-One ERP Solution",
    content:
      "Establishing powerful media relationships to boost your brand's recognition and trustworthiness."
  },
  {
    title: "Outstanding Support Regular Updates",
    content:
      "We are a global team working strategically with leading brands, driven by the belief that progress happens through purposeful action."
  },
  {
    title: "Improved Customer Relationships",
    content:
      "We are a global team working strategically with leading brands, driven by the belief that progress happens through purposeful action."
  },
  {
    title: "Assist with property financing mortgages",
    content:
      "We are a global team working strategically with leading brands, driven by the belief that progress happens through purposeful action."
  }
];

export default function BusinessSection() {
  const [activeItem, setActiveItem] = useState("0");

  useEffect(() => {
    const accordionItems = document.querySelectorAll("[role='button']");

    accordionItems.forEach((item) => {
      item.addEventListener("click", () => {
        gsap.fromTo(
          item,
          { scale: 1, backgroundColor: "#f0f0f0" },
          {
            scale: 1.05,
            backgroundColor: "#e0e0e0",
            duration: 0.3,
            ease: "power2.out"
          }
        );

        gsap.to(item, {
          scale: 1,
          backgroundColor: "#f0f0f0",
          duration: 0.3,
          delay: 0.3,
          ease: "power2.in"
        });
      });
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#fcfaf7] to-[#fdfaf6] px-4 py-4 pt-10 md:pt-24 pb-24 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-center font-twk">
            {/* Left Column: Text */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-600 text-left xl:text-left">
                BUSINESS PLATFORM
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 text-left xl:text-left">
                Select Business for a{" "}
                <span className="block">
                  top-tier{" "}
                  <span className="text-[--purple]">industry experience</span>
                </span>
              </h2>
            </div>

            {/* Right Column: Text and Button */}
            <div className="flex flex-col items-start xl:items-end space-y-8">
              <p className="text-gray-600 font-normal text-left xl:text-right max-w-md">
                Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit
                Lorem ipsum dolor sit In nulla nunc arcu velit.
              </p>
              <div>
                <a className="bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 ">
                  Get Started Now
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            {/* Left Column: Image */}
            <div className="xl:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden mt-[25px] md:mt-0">
              <img
                src="/jjd.jpg"
                alt="Business discussion"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Column: Features */}
            <div className="xl:w-1/2">
              <Accordion
                type="single"
                defaultValue="0"
                value={activeItem}
                onValueChange={setActiveItem}
                className="space-y-2"
              >
                {features.map((feature, index) => (
                  <AccordionItem
                    key={index}
                    value={index.toString()}
                    className="border rounded-lg px-6 py-3 data-[state=open]:bg-blue-50 transition-colors font-twk"
                  >
                    <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:text-blue-500">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-semibold text-neutral-800 text-left">
                          {feature.title}
                        </span>
                        {activeItem === index.toString() ? (
                          <Minus className="h-5 w-5 shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 shrink-0" />
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 text-gray-600 font-normal">
                      {feature.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
