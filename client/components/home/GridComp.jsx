"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BlurText from "./BlurText";

// Sample data
const studies = [
  {
    type: "STUDY",
    title: "Life Trends 2025: Future-Oriented Business Trends",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/a.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Technology Vision 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/b.jpg",
    href: "#"
  },
  {
    type: "SUCCESS STORY",
    title: "five-star experiences for employees",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/c.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Reinvention with a digital core: Accelerating growth through change",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/d.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Life Trends 2025: Future-Oriented Business Trends",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/e.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Technology Vision 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/f.jpg",
    href: "#"
  },
  {
    type: "SUCCESS STORY",
    title: "five-star experiences for employees",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/g.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Reinvention with a digital core: Accelerating growth through change",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
    image: "/FAQ/i.jpg",
    href: "#"
  }
];

const ImageGrid = () => {
  // We'll attach our GSAP scope to this container
  const cardsRef = useRef(null);

  // useGSAP runs once on mount, and cleans up on unmount
  useGSAP(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    // 1) Initial "fade in + slide up" animation for each card
    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // 2) Attach hover animations to each card
    const eventListeners = [];

    Array.from(cards).forEach((card) => {
      const image = card.querySelector("img");
      const description = card.querySelector(".description");

      // Define the enter/leave callbacks
      const handleEnter = () => {
        gsap.to(image, {
          scale: 1.2,
          x: 30,
          y: 20,
          filter: "blur(35px)",
          duration: 0.5,
          ease: "power3.out"
        });
        gsap.fromTo(
          description,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      };

      const handleLeave = () => {
        gsap.to(image, {
          scale: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out"
        });
        gsap.to(description, {
          x: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      };

      // Attach listeners
      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      // Store references so we can remove them later
      eventListeners.push({
        card,
        handleEnter,
        handleLeave
      });
    });

    // 3) Cleanup: remove event listeners if the component unmounts
    return () => {
      eventListeners.forEach(({ card, handleEnter, handleLeave }) => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, { scope: cardsRef });
  // ^ scope ensures GSAP searches within cardsRef instead of the whole page

  return (
    <div className="bg-gradient-to-b from-[#fdfaf6] to-[#fefbf6] pt-10 md:pt-20 pb-24 px-4">
      <div className="flex justify-center items-center">
        <h1 className="text-neutral-800 text-3xl md:text-4xl xl:text-5xl leading-tight tracking-tight font-semibold text-center mb-12 max-w-lg">
          <BlurText
            text="Commonly Asked Questions"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-neutral-800 text-5xl md:text-5xl xl:text-5xl leading-tight tracking-tight font-semibold text-center mb-4"
          />
        </h1>
      </div>

      {/* Container for all the cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        ref={cardsRef}
      >
        {studies.map((study, index) => (
          <Link
            key={index}
            href={study.href}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Card image */}
            <img
              src={study.image || "/placeholder.svg"}
              alt={study.title}
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>

            {/* Card text */}
            <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
              <div className="mb-2">
                <div className="font-medium">{study.type}</div>
              </div>
              <h3 className="text-lg md:text-xl xl:text-2xl font-serif">
                {study.title}
              </h3>
              {/* This `.description` is what we animate on hover */}
              <p className="description text-sm font-twk font-medium mt-4 opacity-0">
                {study.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
