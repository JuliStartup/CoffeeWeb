"use client";
import { useState } from "react";
import Connect from "./Connect";
import Learn from "./Learn";
import Shop from "./Shop";
import Subscribe from "./Subscribe";

export default function TabCards() {
	const [activeCard, setActiveCard] = useState("Shop");

	const cardItems = [
		{ text: "Shop", component: <Shop /> },
		{ text: "Subscribe", component: <Subscribe /> },
		{ text: "Learn", component: <Learn /> },
		{ text: "Connect", component: <Connect /> },
	];

	const handleCardClick = (text) => {
		setActiveCard(text);
	};

	return (
		<div>
			<div className="overflow-hidden bg-[--beige] p-2 w-full flex flex-nowrap justify-center gap-4">
				{cardItems.map((item, index) => (
					<div
						key={index}
						onClick={() => handleCardClick(item.text)}
						className={`cursor-pointer bg-[--tab_card_bg] bg-opacity-10 py-2 lg:p-0 rounded-xl shadow-md text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 flex-grow basis-40 max-w-xs lg:h-16 ${
							activeCard === item.text ? "ring-2 ring-white" : ""
						}`}
					>
						<span
							className="text-[--card-text-color] font-semibold text-[0.85rem] lg:text-lg "
							style={{
								color: "var(--card_TextColor)",
								textTransform: "uppercase",
							}}
						>
							{item.text}
						</span>
					</div>
				))}
			</div>
			<div className="mt-0">
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
