"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FranchiseFAQ() {
	const [activeItem, setActiveItem] = useState("0");
	const features = [
		{
			title: "What is the initial investment required to open a franchise?",
			content:
				"The initial investment varies depending on the location, size, and type of franchise model you choose. On average, it ranges from $50,000 to $150,000, which typically covers the franchise fee, equipment, inventory, and initial working capital. We will provide you with a detailed breakdown during the application process.",
		},
		{
			title: "Do I need prior experience to run the franchise?",
			content:
				"No prior experience is necessary. We provide comprehensive training and ongoing support to help you successfully operate your franchise. However, a passion for customer service and good business sense are highly recommended.",
		},
		{
			title: "What support does the franchisor provide?",
			content:
				"We offer end-to-end support including site selection assistance, staff training, marketing guidance, operational manuals, and ongoing business reviews to help you grow and succeed.",
		},
	];
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-neutral-800 text-3xl md:text-4xl xl:text-5xl leading-tight tracking-tight font-semibold text-center py-12 max-w-lg">
				FAQS
			</h1>
			<div className="xl:w-1/2">
				<Accordion
					type="single"
					defaultValue="0"
					value={activeItem}
					onValueChange={setActiveItem}
					className="space-y-2"
				>
					{features.map((feature, index) => (
						<AccordionItem
							key={index}
							value={index.toString()}
							className="border rounded-lg px-6 py-3 data-[state=open]:bg-white transition-colors font-twk"
						>
							<AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:text-blue-500">
								<div className="flex items-center justify-between w-full">
									<span className="text-lg font-semibold text-neutral-800 text-left">
										{feature.title}
									</span>
									{activeItem === index.toString() ? (
										<Minus className="h-5 w-5 shrink-0" />
									) : (
										<Plus className="h-5 w-5 shrink-0" />
									)}
								</div>
							</AccordionTrigger>
							<AccordionContent className="pt-4 text-gray-600 font-normal">
								{feature.content}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
}
