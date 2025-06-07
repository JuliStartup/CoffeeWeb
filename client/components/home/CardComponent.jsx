"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MoveRight,
  Cloud,
  FileType,
  HeadphonesIcon
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Example data
const content = [
  {
    text: "a snap.",
    cards: [
      {
        icon: <MoveRight className="text-blue-600" />,
        title: "Recovery",
        description:
          "Move to a new folder and recover data when you're comfortable."
      },
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Legacy to cloud",
        description:
          "A/M/M* migration is available to transfer data precisely from your current legacy server to Zoho Mail on the cloud."
      },
      {
        icon: <FileType className="text-blue-600" />,
        title: "Microsoft Office compatibility",
        description:
          "All of our office suites are fully featured and good to work with your existing Word, Excel, or PowerPoint files without issues."
      },
      {
        icon: <HeadphonesIcon className="text-blue-600" />,
        title: "Migration assistance",
        description:
          "Learn from our extensive guides to do the migration yourselves. Contact our 24/7 support if you need a Zoho expert."
      }
    ]
  },
  {
    text: "seamless.",
    cards: [
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Data Sync",
        description: "Sync all your data in real-time."
      },
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Cloud Integration",
        description: "Full integration with cloud services."
      },
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Collaboration Tools",
        description: "Enhance productivity and communication."
      },
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Security",
        description: "Ensure data safety with advanced security."
      }
    ]
  },
  {
    text: "efficient.",
    cards: [
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Automation",
        description: "Automate repetitive tasks easily."
      },
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Performance Boost",
        description: "Experience faster performance."
      },
      {
        icon: <Cloud className="text-blue-600" />,
        title: "Custom Solutions",
        description: "Tailored migration services."
      },
      {
        icon: <Cloud className="text-blue-600" />,
        title: "24/7 Support",
        description: "Dedicated support around the clock."
      }
    ]
  }
];

export default function CardComponent() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const textRef = useRef(null);
  const cardsRef = useRef([]); // array of refs for each card
  const containerRef = useRef(null);

  // Animate text fade-out -> set new text -> fade-in
  const animateTextChange = (newText) => {
    const tl = gsap.timeline();
    tl.to(textRef.current.firstChild, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.inOut"
    })
      .add(() => {
        textRef.current.firstChild.textContent = newText;
      })
      .to(textRef.current.firstChild, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      });
    return tl;
  };

  // Slide cards out, switch data, slide them in
  const animateCards = (direction) => {
    const tl = gsap.timeline();
    const xOffset = direction === "next" ? 100 : -100;

    tl.to(cardsRef.current, {
      opacity: 0,
      x: -xOffset,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.inOut"
    })
      .set(cardsRef.current, { x: xOffset })
      .add(() => {
        setIndex((prev) =>
          direction === "next"
            ? (prev + 1) % content.length
            : (prev - 1 + content.length) % content.length
        );
      })
      .to(cardsRef.current, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
      });

    return tl;
  };

  // Master function to change slides in a direction
  const handleChange = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Next text for next/prev index
    const nextText =
      content[
        direction === "next"
          ? (index + 1) % content.length
          : (index - 1 + content.length) % content.length
      ].text;

    const masterTL = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });

    masterTL
      .add(animateTextChange(nextText))
      .add(animateCards(direction), "-=0.3");
  };

  // Automatically go to next slide every few seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      // Only slide if not currently mid-animation
      if (!isAnimating) {
        handleChange("next");
      }
    }, 4000); // Slide every 4 seconds, adjust as needed

    return () => clearInterval(autoSlide);
  }, [isAnimating]);

  // Initial mount animations using useGSAP
  useGSAP(() => {
    // Animate the container from below
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
    // Animate each card from below with a stagger
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-[#fdfaf5] to-[#fefbf5] w-full pt-24 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title / Nav */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-medium text-neutral-900">
            Migrating is{" "}
            <span ref={textRef} className="relative inline-block min-w-[120px]">
              <span>{content[index].text}</span>
            </span>
          </h2>
          {/* Manual buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => handleChange("prev")}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 transition-colors"
              disabled={isAnimating}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => handleChange("next")}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 transition-colors"
              disabled={isAnimating}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {content[index].cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-gray-50 rounded-lg p-6 shadow-lg border transition-shadow"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
