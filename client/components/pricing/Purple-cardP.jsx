"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function PurpleCards({ selectedTier }) {
  const allCardItems = [
    { text: "Core payroll", href: "#", image: "/3.jpg" },
    { text: "Time Management", href: "#", image: "/11.jpg" },
    { text: "Leave Management", href: "#", image: "/22.jpg" },
    { text: "Ticketing", href: "#", image: "/44.jpg" },
    { text: "National Geographic", href: "#", image: "/aa.jpg" },
    { text: "Communications", href: "#", image: "/cc.jpg" }
  ];

  const getHighlightedCards = () => {
    switch (selectedTier) {
      case "Simple":
        return [allCardItems[0].text];
      case "Plus":
        return allCardItems.slice(0, 3).map((item) => item.text);
      case "Premium":
        return allCardItems.map((item) => item.text);
      default:
        return [];
    }
  };

  const highlightedCards = getHighlightedCards();

  return (
    <div className="overflow-hidden bg-[--purple] py-6 w-full flex flex-wrap lg:flex-nowrap justify-center gap-4 px-4">
      {allCardItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <div
            className={`group relative cursor-pointer bg-white bg-opacity-10 p-4 rounded-xl shadow-md text-center flex items-center justify-center transition-transform duration-300 hover:scale-105 flex-grow basis-40 max-w-xs xl:w-48 lg:h-32 ${
              highlightedCards.includes(item.text) ? "ring-2 ring-white" : ""
            }`}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
            </div>
            <span className="text-white font-semibold text-[0.85rem] lg:text-lg relative z-10">
              {item.text}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
