"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const studies = [
  {
    type: "ARTICLE",
    title: "Exploring Life Trends 2025: Future Business Insights",
    description:
      "Delve into the future of business with our in-depth analysis...",
    image: "/FAQ/a.jpg",
    href: "#"
  },
  {
    type: "ARTICLE",
    title: "Technology Vision 2025: The Future of Tech Innovations",
    description:
      "Get a glimpse into the technological advancements expected by 2025...",
    image: "/FAQ/b.jpg",
    href: "#"
  },
  {
    type: "STORY",
    title: "Creating Five-Star Employee Experiences: Success Stories",
    description:
      "Learn from real-world examples of companies that have successfully...",
    image: "/FAQ/c.jpg",
    href: "#"
  },
  {
    type: "ARTICLE",
    title: "Digital Reinvention: Accelerating Growth in the Modern Era",
    description:
      "Explore how businesses are leveraging digital technologies to drive growth...",
    image: "/FAQ/d.jpg",
    href: "#"
  },
  {
    type: "ARTICLE",
    title: "Life Trends 2025: Navigating the Future Business Landscape",
    description:
      "Discover the key business trends expected to shape industries in 2025...",
    image: "/FAQ/e.jpg",
    href: "#"
  },
  {
    type: "ARTICLE",
    title: "Technology Vision 2025: Innovations Driving Change",
    description:
      "Examine the technological innovations poised to transform industries by 2025...",
    image: "/FAQ/f.jpg",
    href: "#"
  },
  {
    type: "STORY",
    title: "Elevating Employee Engagement: Best Practices and Stories",
    description:
      "Discover effective strategies for enhancing employee engagement...",
    image: "/FAQ/g.jpg",
    href: "#"
  },
  {
    type: "ARTICLE",
    title: "Accelerating Growth Through Digital Transformation",
    description:
      "Understand how a digital core can accelerate business growth...",
    image: "/FAQ/i.jpg",
    href: "#"
  }
];

export default function Blog() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current?.children;
    if (!cards) return;

    // initial animation
    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // hover
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
