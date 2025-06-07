"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BlurText from "../home/BlurText";

// Sample card data
const cardData = [
  { image: "cardicons/bill.png", text: "Team Management", bgColor: "#DFF8EE" },
  { image: "cardicons/budget.png", text: "Collaboration", bgColor: "#F5FFC0" },
  { image: "cardicons/costs.png", text: "Reporting", bgColor: "#FEEAF0" },
  { image: "cardicons/ec2.png", text: "Analytics", bgColor: "#FEEDE1" },
  { image: "cardicons/forecast.png", text: "Integrations", bgColor: "#F5FFBD" },
  { image: "cardicons/idle.png", text: "Scheduling", bgColor: "#FEE9FB" },
  {
    image: "cardicons/overprovisioning.png",
    text: "Notifications",
    bgColor: "#FEE9FB"
  },
  {
    image: "cardicons/savings.png",
    text: "Security and support",
    bgColor: "#EAEBFD"
  },
  {
    image: "cardicons/support.png",
    text: "Support and something",
    bgColor: "#DFF8EE"
  },
  { image: "cardicons/t4.png", text: "API Access to get", bgColor: "#F8F7FA" },
  {
    image: "cardicons/vpc.png",
    text: "Permissions allowed in",
    bgColor: "#F5FFC0"
  },
  {
    image: "cardicons/bill.png",
    text: "User Onboarding is nor",
    bgColor: "#FEEDE1"
  },
  {
    image: "cardicons/costs.png",
    text: "Project Tracking of the system",
    bgColor: "#F5FFBD"
  },
  {
    image: "cardicons/idle.png",
    text: "Billing of account",
    bgColor: "#FEE9FB"
  },
  {
    image: "cardicons/support.png",
    text: "Reporting 2",
    bgColor: "#EAEBFD"
  }
];

function AnimatedCard({ allData, isFaded }) {
  const cardRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const textRef = React.useRef(null);
  const [activeItem, setActiveItem] = React.useState(null);

  // Repeatedly pick a random item and animate in/out
  useGSAP(() => {
    if (!imgRef.current || !textRef.current) return;

    const pickRandomItem = () => {
      const randomIndex = Math.floor(Math.random() * allData.length);
      setActiveItem(allData[randomIndex]);
    };

    pickRandomItem(); // pick first item

    // Random durations for variety
    const initialDelay = gsap.utils.random(1, 2);
    const fadeInDur = gsap.utils.random(0.5, 1.5);
    const visibleDur = gsap.utils.random(1, 4);
    const fadeOutDur = gsap.utils.random(0.5, 1.5);
    const blankDur = gsap.utils.random(1, 2);

    const tl = gsap.timeline({
      delay: initialDelay,
      repeat: -1,
      onRepeat: pickRandomItem
    });

    tl.fromTo(
      [imgRef.current, textRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: fadeInDur, ease: "power2.inOut" }
    )
      .to({}, { duration: visibleDur }) // stay visible
      .to([imgRef.current, textRef.current], {
        opacity: 0,
        y: -30,
        duration: fadeOutDur,
        ease: "power2.inOut"
      })
      .to({}, { duration: blankDur }); // blank time

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`problem-item w-[168px] bg-white rounded-[16px] px-[20px] pb-[16px] pt-[34px]
      flex flex-col items-center justify-center gap-[32px] shadow-[0_0_0_1px_#0e3f7e0f,0_1px_1px_-0.5px_#2a334608,0_2px_2px_-1px_#2a33460a,0_3px_3px_-1.5px_#2a33460a,0_5px_5px_-2.5px_#2a334608,0_10px_10px_-5px_#2a334608,0_24px_24px_-8px_#2a334608]
      ${isFaded ? "opacity-30" : ""}`}
    >
      <div
        ref={imgRef}
        className="img_cont w-[75px] h-[50px] flex items-center justify-center rounded-[40px]"
        style={{ backgroundColor: activeItem?.bgColor || "#ffffff" }}
      >
        {activeItem && (
          <img
            className="w-[32px] h-[32px]"
            src={activeItem.image}
            alt={activeItem.text}
          />
        )}
      </div>
      <p
        ref={textRef}
        className="card_text min-h-[2.5rem] text-[0.9rem] leading-[1.18] text-center line-clamp-2 w-[80%] font-twk font-normal"
      >
        {activeItem?.text || ""}
      </p>
    </div>
  );
}

export default function GsapSection() {
  return (
    <div className="relative w-full h-auto py-[90px] flex flex-col items-center justify-center bg-gradient-to-b from-[#f9f8fa] to-[#fdfaf6] gap-[50px]">
      <div className="w-[90%] flex flex-col items-center justify-center">
        <h1>
          <BlurText
            text="The Affordable Team Platform"
            delay={100}
            animateBy="words"
            direction="top"
            className="font-twk text-neutral-700 text-center text-[56px] leading-[56px] tracking-[-1.68px] font-semibold max-w-xl md:max-w-[5xl]"
          />
        </h1>
      </div>

      <div className="cards_cont">
        <div className="grid grid-cols-8 grid-rows-3 gap-x-[24px] gap-y-[24px] place-items-center">
          {Array.from({ length: 24 }).map((_, index) => (
            <AnimatedCard
              key={index}
              allData={cardData}
              isFaded={index % 8 === 0 || index % 8 === 7}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
