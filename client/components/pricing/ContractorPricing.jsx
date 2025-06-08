"use client";

import { ChevronDown } from "lucide-react";
import BlurText from "../home/BlurText";

export default function ContractorPricing() {
	return (
		<div className="flex justify-center pt-18 pb-18 md:pt-28 md:pb-28 xl:pt-40 xl:pb-30 bg-gradient-to-b from-[#fbf9f9] to-[#fcfaf7] p-4">
			<div className="max-w-7xl w-full">
				{/* Main bordered container */}
				<div className="border border-gray-200 font-twk shadow-lg rounded-lg p-6 bg-white">
					<div className="flex flex-col md:flex-row justify-between items-start gap-6">
						<div className="space-y-4">
							{/* Badge */}
							<div className="inline-flex items-center gap-2 px-2 py-1 bg-yellow-100 rounded-full">
								<span className="text-xs font-medium text-yellow-800">
									Member-only story
								</span>
							</div>

							{/* Title and description */}
							<div className="space-y-1">
								<h2>
									<BlurText
										text="Contractor Only"
										delay={50}
										animateBy="words"
										direction="top"
										className="text-3xl md:text-4xl font-serif text-gray-900"
									/>
								</h2>
								<p className="text-sm text-gray-600">
									For contractor-only businesses who haven't hired W-2 employees
									yet.
								</p>
							</div>

							{/* Pricing */}
							<div className="flex items-baseline gap-1 text-sm">
								<span className="line-through text-gray-500">$35</span>
								<span className="font-medium">$0</span>
								<span className="text-gray-600">/mo plus</span>
								<span className="font-medium">$6</span>
								<span className="text-gray-600">/mo per person</span>
							</div>
						</div>

						{/* Right side buttons */}
						<div className="flex flex-col items-end gap-2">
							<button className="text-rose-600 border border-rose-600 hover:text-rose-700 font-medium text-sm px-4 py-2 rounded">
								Create account
							</button>
							<button className="flex items-center gap-1 text-gray-500 hover:text-gray-600 text-sm">
								See plan details
								<ChevronDown className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>

				{/* Footer text outside the box */}
				<p className="mt-4 text-xs text-gray-500 leading-relaxed px-2">
					<span className="font-medium">Plus plan:</span> Save 25% for the first
					3 months. Create an account by Jan 31, 2025 and pay payroll by Feb 28,
					2025 to apply this discount.
					<span className="font-medium">Premium plan:</span> Save 25% for the
					first 3 months. Create an account by Jan 31, 2025 and pay payroll by
					Feb 28, 2025 to apply this discount.
				</p>
			</div>
		</div>
	);
}
