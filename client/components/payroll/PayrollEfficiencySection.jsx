"use client";

import { motion } from "framer-motion";

export default function PayrollEfficiencySection() {
	return (
		<section className="bg-gradient-to-b from-[#fdfaf6] to-[#fefbf6] pt-16 pb-16 font-twk w-full px-4">
			<div className="container max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
				{/* Text Section */}
				<div className="max-w-xl space-y-6">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="font-twk text-neutral-700 text-3xl leading-snug tracking-tight font-semibold max-w-2xl md:max-w-[5xl]"
					>
						WyndClub is committed to making payroll more efficient and
						user-friendly with our robust platform
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-base font-twk font-normal text-gray-600 sm:text-lg"
					>
						We are setting the standard for integrated payroll systems. We
						provide insight so that you can focus on what matters most—growing
						your business and supporting your employees.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<button className="bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 w-full sm:w-auto">
							Get Started Now
						</button>
					</motion.div>
				</div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="relative max-w-lg xl:max-w-xl rounded-3xl overflow-hidden shadow-lg p-4"
				>
					<img
						src="./payroll/13.png"
						alt="Team collaborating"
						className="object-cover w-full h-full rounded-lg"
					/>
				</motion.div>
			</div>
		</section>
	);
}
