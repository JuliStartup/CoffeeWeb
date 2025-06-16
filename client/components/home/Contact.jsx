"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Building2, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";
import CirclePattern from "../payroll/CirclePattern2";

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Refs for form animation & contact info items
	const formRef = useRef(null);
	const contactInfoRef = useRef(null);

	// We'll also use a containerRef for scoping
	const containerRef = useRef(null);

	// Convert your old useEffect to useGSAP
	useGSAP(
		() => {
			// Animate form entrance
			gsap.from(formRef.current, {
				opacity: 0,
				y: 50,
				duration: 0.8,
				ease: "power3.out",
			});

			// Animate contact info children
			gsap.from(contactInfoRef.current?.children, {
				opacity: 0,
				x: -30,
				stagger: 0.2,
				duration: 0.8,
				ease: "power2.out",
			});
		},
		{ scope: containerRef },
	);
	// ^ The `scope` ensures that any class-based selectors or queries
	// would only run inside `containerRef` (optional, but good practice).

	async function handleSubmit(event) {
		event.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(event.target);
		const values = Object.fromEntries(formData.entries());

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log(values);
		} catch (error) {
			console.error("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div
			ref={containerRef}
			className="bg-gradient-to-b from-[#fdfaf5] to-[#fffbf5] p-6 pt-24 pb-24 relative"
		>
			<CirclePattern />
			<div className="max-w-7xl mx-auto">
				<div className="grid xl:grid-cols-12 gap-8 items-start">
					{/* Left Column */}
					<div className="xl:col-span-4 bg-gradient-to-b from-[#fdfaf5] to-[#fffbf5] p-8 rounded-lg relative z-10">
						<div className="space-y-8">
							<div className="space-y-4 font-twk">
								<h1 className="text-3xl md:text-4xl font-semibold text-[--primaryColor] bg-clip-text">
									Let&apos;s Talk
								</h1>
								<p className="text-gray-600 font-medium leading-relaxed">
									Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu
									velit consectetur massa mauris
								</p>
							</div>

							{/* Contact Info Items */}
							<div className="space-y-6" ref={contactInfoRef}>
								<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
									<div className="bg-[--beige] p-3 rounded-lg shadow-lg shadow-blue-200">
										<Building2 className="text-white size-5" />
									</div>
									<div>
										<div className="font-twk font-semibold text-gray-900">
											Company Name
										</div>
										<div className="font-twk font-medium text-gray-600 text-sm">
											Nijverheidsweg 10-J3881 LA Putten
										</div>
									</div>
								</div>

								<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
									<div className="bg-[--beige] p-3 rounded-lg shadow-lg shadow-blue-200">
										<Phone className="text-white size-5" />
									</div>
									<div>
										<div className="font-twk font-semibold text-gray-900">
											Phone Number
										</div>
										<div className="font-twk font-medium text-gray-600 text-sm">
											0341 700 224
										</div>
									</div>
								</div>

								<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
									<div className="bg-[--beige] p-3 rounded-lg shadow-lg shadow-blue-200">
										<Mail className="text-white size-5" />
									</div>
									<div>
										<div className="font-twk font-semibold text-gray-900">
											Email Address
										</div>
										<div className="font-twk font-medium text-gray-600 text-sm">
											info@fitliving.nl
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div
						className="xl:col-span-8 p-8 rounded-lg bg-gradient-to-b from-[#fdfaf5] to-[#fffbf5] relative z-10"
						ref={formRef}
					>
						<form onSubmit={handleSubmit} className="space-y-6 font-twk">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="text-gray-700 font-thin block mb-2">
										Full Name
									</label>
									<input
										type="text"
										name="fullName"
										placeholder="Enter your name here"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>

								<div>
									<label className="text-gray-700 font-thin block mb-2">
										Last Name
									</label>
									<input
										type="text"
										name="lastName"
										placeholder="Enter your last name here"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>

								<div>
									<label className="text-gray-700 font-thin block mb-2">
										Your Title
									</label>
									<input
										type="text"
										name="title"
										placeholder="Enter your title"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>

								<div>
									<label className="text-gray-700 font-thin block mb-2">
										Phone
									</label>
									<input
										type="text"
										name="phone"
										placeholder="+562"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>

								<div>
									<label className="text-gray-700 font-thin block mb-2">
										Country
									</label>
									<input
										type="text"
										name="country"
										placeholder="Enter your country"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>

								<div>
									<label className="text-gray-700 font-thin block mb-2">
										State
									</label>
									<input
										type="text"
										name="state"
										placeholder="Enter your state"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>

								<div>
									<label className="text-gray-700 font-thin block mb-2">
										Annual Revenue
									</label>
									<input
										type="text"
										name="annualRevenue"
										placeholder="Enter your annual revenue"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>

								<div>
									<label className="text-gray-700 font-thin block mb-2">
										Number of Employees
									</label>
									<input
										type="text"
										name="employees"
										placeholder="Enter number of employees"
										className="w-full border border-gray-300 font-thin transition-colors rounded-md p-3"
									/>
								</div>
							</div>

							<button
								type="submit"
								className="w-full sm:w-auto mt-6 bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Submitting..." : "Get Started"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
