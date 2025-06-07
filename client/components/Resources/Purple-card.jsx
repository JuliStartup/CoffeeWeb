"use client";
import React, { useState } from "react";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Webinar from "./Webinar";
import KnowledgeCenter from "./KnowledgeCenter";
import ContactSection from "./ContactSection";

export default function PurpleCards() {
  const [activeCard, setActiveCard] = useState("Webinar");

  const cardItems = [
    { text: "Contact", component: <ContactSection /> },
    { text: "Knowledge Centre", component: <KnowledgeCenter /> },
    { text: "Webinar", component: <Webinar /> },
    { text: "Blog", component: <Blog /> },
    { text: "FAQ's", component: <FAQ /> },
  ];

  const handleCardClick = (text) => {
    setActiveCard(text);
  };

  return (
    <div>
      <div className="overflow-hidden bg-[--purple] py-6 w-full flex flex-wrap lg:flex-nowrap justify-center gap-4 px-4">
        {cardItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.text)}
            className={`cursor-pointer bg-white bg-opacity-10 p-4 rounded-xl shadow-md text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 flex-grow basis-40 max-w-xs lg:w-48 lg:h-32 ${
              activeCard === item.text ? "ring-2 ring-white" : ""
            }`}
          >
            <span className="text-white font-semibold text-[0.85rem] lg:text-lg">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        {cardItems.map((item) => (
          <div
            key={item.text}
            style={{ display: activeCard === item.text ? "block" : "none" }}
          >
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
}
