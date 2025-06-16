"use client";

import { Briefcase, ChevronDown, Globe, MessageSquare } from "lucide-react";

const PlatformDropdown = ({ isOpen, toggleDropdown }) => (
	<div className="relative">
		<button
			className="font-twk font-thin px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200 flex items-center gap-1"
			onClick={toggleDropdown}
		>
			Partner
			<ChevronDown
				className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
			/>
		</button>
		{isOpen && (
			<div className="absolute top-full left-0 bg-white rounded-md shadow-lg p-4 grid grid-cols-3 gap-6 w-[800px] z-50">
				<h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
					<div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
						<Briefcase className="h-5 w-5 text-gray-700" />
					</div>
					Wholesale
				</h4>

				<h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
					<div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
						<MessageSquare className="h-5 w-5 text-gray-700" />
					</div>
					Franchise
				</h4>
			</div>
		)}
	</div>
);

const GlobalDropdown = ({ isOpen, toggleDropdown }) => (
	<div className="relative">
		<button
			className="font-twk font-medium px-3 py-1 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200 flex items-center gap-1"
			onClick={toggleDropdown}
		>
			<Globe className="h-4 w-4" />
			Global (EN)
			<ChevronDown
				className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
			/>
		</button>
		{isOpen && (
			<div className="absolute top-full left-0 bg-white rounded-md shadow-lg p-4 w-40 z-50">
				<ul className="space-y-1">
					<li>
						<button className="font-twk font-normal text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
							<Globe className="h-4 w-4" />
							Global (EN)
						</button>
					</li>
					<li>
						<button className="font-twk font-normal text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
							<Globe className="h-4 w-4" />
							Global (CA)
						</button>
					</li>
				</ul>
			</div>
		)}
	</div>
);

export { GlobalDropdown, PlatformDropdown };
