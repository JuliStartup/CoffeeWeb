"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const studies = [
  {
    type: "STUDY",
    title: "Life Trends 2025: Future-Oriented Business Trends",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/a.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Technology Vision 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/b.jpg",
    href: "#"
  },
  {
    type: "SUCCESS STORY",
    title: "five-star experiences for employees",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/c.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Reinvention with a digital core: Accelerating growth through change",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/d.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Life Trends 2025: Future-Oriented Business Trends",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/e.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Technology Vision 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/f.jpg",
    href: "#"
  },
  {
    type: "SUCCESS STORY",
    title: "five-star experiences for employees",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/g.jpg",
    href: "#"
  },
  {
    type: "STUDY",
    title: "Reinvention with a digital core: Accelerating growth through change",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/FAQ/i.jpg",
    href: "#"
  }
];

export default function Webinar() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cardsContainer = containerRef.current;
    if (!cardsContainer) return;

    const cards = cardsContainer.children;
    // Initial animation
    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Attach hover listeners
    const cleanup = [];
    Array.from(cards).forEach((card) => {
      const image = card.querySelector("img");
      const description = card.querySelector(".description");

      const handleEnter = () => {
        gsap.to(image, {
          scale: 1.2,
          x: 30,
          y: 20,
          filter: "blur(35px)",
          duration: 0.5,
          ease: "power3.out",
          transformOrigin: "center center"
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
          rotation: 0,
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

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      cleanup.push(() => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });
    });

    // Cleanup on unmount
    return () => cleanup.forEach((fn) => fn());
  }, { scope: containerRef });

  return (
    <div className="bg-gradient-to-b from-[#fdfaf6] to-[#fefbf6] pt-20 pb-24 px-4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        ref={containerRef}
      >
        {studies.map((study, index) => (
          <Link
            key={index}
            href={study.href}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={study.image || "/placeholder.svg"}
              alt={study.title}
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
              {/* Only first 2 have a Register button in the original code */}
              {index < 2 && (
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">{study.type}</div>
                  <button className="bg-gradient-to-bl from-lime-500 via-green-500 to-emerald-500 text-white py-1 px-3 rounded-lg transition-colors">
                    Register Now
                  </button>
                </div>
              )}
              <h3 className="text-lg md:text-xl xl:text-2xl font-serif">
                {study.title}
              </h3>
              <p className="description text-sm font-twk font-medium mt-4 opacity-0">
                {study.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
