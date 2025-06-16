"use client";
import React, { useState } from "react";
import Blog from "../Resources/Blog";
import FAQ from "../Resources/FAQ";
import Webinar from "../Resources/Webinar";
import KnowledgeCenter from "../Resources/KnowledgeCenter";
import ContactSection from "../Resources/ContactSection";

export default function PurpleCardsC() {
	const [activeCard, setActiveCard] = useState("Contact");

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
			<div className="">
				<div className="overflow-hidden bg-[--beige] py-6 w-full flex flex-row items-center justify-center gap-4">
					{cardItems.map((item, index) => (
						<div
							key={index}
							onClick={() => handleCardClick(item.text)}
							className={`relative cursor-pointer bg-white bg-opacity-10 p-6 mx-2 rounded-xl shadow-md text-center w-48 h-32 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 ${
								activeCard === item.text ? "ring-2 ring-white" : ""
							}`}
						>
							<span className="text-white font-semibold text-lg relative group-hover:text-white">
								{item.text}
							</span>
						</div>
					))}
				</div>
			</div>
			<div>
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
