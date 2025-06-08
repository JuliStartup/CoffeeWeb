"use client";

import { motion } from "framer-motion";
import {
	Calculator,
	FileCheck,
	Files,
	FileText,
	UserCheck,
	Users,
} from "lucide-react";

const features = [
	{
		icon: Users,
		title: "Employee benefits and deductions",
	},
	{
		icon: FileText,
		title: "Local filing with authorities",
	},
	{
		icon: Calculator,
		title: "Salary and tax payments",
	},
	{
		icon: FileCheck,
		title: "Payslip creation and delivery",
	},
	{
		icon: Files,
		title: "Localized contracts and documents",
	},
	{
		icon: UserCheck,
		title: "Compliant onboarding and offboarding",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function ComplianceSection() {
	return (
		<section className="bg-gradient-to-b from-[#fbf9f8] to-[#fcfaf8] px-4 py-0 font-twk pt-0  w-full text-white">
			<div className="bg-[#0a1233] max-w-[1333px] mx-auto pb-10 rounded-xl overflow-hidden">
				<div className="absolute inset-0" />

				<div className="container pb-12 pt-12 relative max-w-[1140px] mx-auto h-full flex flex-col justify-center py-0 px-4">
					<div className="grid gap-6 xl:grid-cols-2 items-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="font-twk text-gray-400 text-2xl font-semibold md:text-3xl"
						>
							Maintain compliance and pay your teams confidently
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-slate-300 text-base md:text-lg font-twk font-normal text-center"
						>
							WyndClub is committed to ensuring that payroll can be managed
							easily and efficiently. Through extensive tools, many stakeholders
							including employees and local authorities, we keep on top of all
							regulatory requirements and ensure timely processing of payroll,
							taxes, benefits and more.
						</motion.p>
					</div>

					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:mt-12"
					>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								variants={item}
								className="group relative flex flex-col items-center mt-8"
							>
								<div className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/50 group-hover:bg-blue-900/50 transition-colors">
									<feature.icon className="h-5 w-5 text-blue-400" />
									<div className="absolute -inset-px rounded-lg border border-white-800/50 group-hover:border-white-700/50 transition-colors" />
								</div>
								<h3 className="text-sm font-medium leading-snug text-slate-200 font-twk text-center">
									{feature.title}
								</h3>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
