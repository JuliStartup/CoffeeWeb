"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BlurText from "../home/BlurText";

const studies = [
  {
    type: "QUESTION",
    title: "What are the Key Business Trends for 2025?",
    description:
      "The key business trends for 2025 include a focus on sustainability, increased use of AI and automation, and a shift towards remote work...",
    image: "/FAQ/a.jpg",
    href: "#"
  },
  {
    type: "QUESTION",
    title: "How Will Technology Evolve by 2025?",
    description:
      "By 2025, technology is expected to advance significantly with developments in AI, IoT, and quantum computing...",
    image: "/FAQ/b.jpg",
    href: "#"
  },
  {
    type: "QUESTION",
    title: "What Strategies Improve Employee Engagement?",
    description:
      "Effective strategies for improving employee engagement include providing opportunities for professional development...",
    image: "/FAQ/c.jpg",
    href: "#"
  },
  {
    type: "QUESTION",
    title: "How Does Digital Transformation Drive Business Growth?",
    description:
      "Digital transformation can drive business growth by improving operational efficiency...",
    image: "/FAQ/d.jpg",
    href: "#"
  },
  {
    type: "QUESTION",
    title: "What are the Benefits of Future-Oriented Business Trends?",
    description:
      "Future-oriented business trends can help companies stay competitive, adapt to market changes...",
    image: "/FAQ/e.jpg",
    href: "#"
  },
  {
    type: "QUESTION",
    title: "How Will Emerging Technologies Impact Businesses?",
    description:
      "Emerging technologies will impact businesses by creating new opportunities for innovation...",
    image: "/FAQ/f.jpg",
    href: "#"
  },
  {
    type: "QUESTION",
    title: "What are Best Practices for Employee Engagement?",
    description:
      "Best practices for employee engagement include regular feedback, opportunities for growth...",
    image: "/FAQ/g.jpg",
    href: "#"
  },
  {
    type: "QUESTION",
    title: "How Can Digital Reinvention Accelerate Growth?",
    description:
      "Digital reinvention can accelerate growth by enabling businesses to adapt quickly to market changes...",
    image: "/FAQ/i.jpg",
    href: "#"
  }
];

export default function FAQ() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current?.children;
    if (!cards) return;

    // Initial fade
    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Hover
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
