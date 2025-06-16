"use client";
import { motion } from "framer-motion";
import {
	AppWindowMacIcon,
	BookTemplate,
	Clock,
	DollarSign,
	HeartIcon,
	MapPinIcon,
	Minimize2Icon,
} from "lucide-react";
import { useEffect, useRef } from "react";
// IMPORTANT: In the Next.js 13 App Router, use next/navigation
import { usePathname } from "next/navigation";

export default function EmployeeManagement() {
	const pathname = usePathname();

	const containerRef = useRef(null);
	const onboardingRef = useRef(null);
	const ongoingRef = useRef(null);
	const offboardingRef = useRef(null);
	const payrollRef = useRef(null);
	const benefitsRef = useRef(null);
	const timeAttendanceRef = useRef(null);
	const headcountRef = useRef(null);

	// Keep track of the active lines so we can remove them as needed
	const linesRef = useRef([]);

	// 1) Draw lines once (on mount) + set up resize listener
	useEffect(() => {
		if (typeof window === "undefined") return;

		let timer;

		import("leader-line-new").then((mod) => {
			const LeaderLine = mod.default;

			// Delay creating lines to allow the DOM to settle
			timer = setTimeout(() => {
				// If lines already exist, remove them before re-creating
				if (linesRef.current.length) {
					linesRef.current.forEach((line) => line.remove());
					linesRef.current = [];
				}

				if (
					onboardingRef.current &&
					ongoingRef.current &&
					offboardingRef.current &&
					payrollRef.current &&
					benefitsRef.current &&
					timeAttendanceRef.current &&
					headcountRef.current
				) {
					const commonOptions = {
						color: "#371f37",
						size: 2,
						path: "fluid",
						startSocket: "bottom",
						endSocket: "top",
						endPlug: "behind",
						startSocketGravity: 80,
						endSocketGravity: 80,
						dash: {
							animation: true,
							len: 12,
							gap: 6,
							animOptions: {
								duration: 1500,
								timing: "linear",
								reverse: false,
							},
						},
					};

					// Create lines
					// const lines = [
					//   new LeaderLine(onboardingRef.current, payrollRef.current, {
					//     ...commonOptions,
					//     startSocketGravity: 100,
					//     endSocketGravity: 100
					//   }),
					//   new LeaderLine(onboardingRef.current, benefitsRef.current, {
					//     ...commonOptions,
					//     startSocketGravity: 120,
					//     endSocketGravity: 120
					//   }),
					//   new LeaderLine(ongoingRef.current, benefitsRef.current, {
					//     ...commonOptions,
					//     startSocketGravity: 100,
					//     endSocketGravity: 100
					//   }),
					//   new LeaderLine(ongoingRef.current, timeAttendanceRef.current, {
					//     ...commonOptions,
					//     startSocketGravity: 120,
					//     endSocketGravity: 120
					//   }),
					//   new LeaderLine(offboardingRef.current, timeAttendanceRef.current, {
					//     ...commonOptions,
					//     startSocketGravity: 120,
					//     endSocketGravity: 120
					//   }),
					//   new LeaderLine(offboardingRef.current, headcountRef.current, {
					//     ...commonOptions,
					//     startSocketGravity: 100,
					//     endSocketGravity: 100
					//   })
					// ];

					// Hide lines initially, then "draw" them in a staggered way
					lines.forEach((line) => line.hide("none"));
					lines.forEach((line, index) => {
						line.position();
						setTimeout(() => {
							line.show("draw", { duration: 1200, timing: "ease" });
							setTimeout(() => {
								line.setOptions({
									color: "#371f37",
									size: 2.5,
								});
							}, 1200);
						}, index * 400);
					});

					// Store references to remove later
					linesRef.current = lines;
				}
			}, 500);
		});

		const handleResize = () => {
			// Reposition lines on window resize
			if (linesRef.current.length) {
				linesRef.current.forEach((line) => line.position());
			}
		};
		window.addEventListener("resize", handleResize);

		return () => {
			// Cleanup when this component unmounts
			if (timer) clearTimeout(timer);
			window.removeEventListener("resize", handleResize);

			// Remove all lines
			if (linesRef.current.length) {
				linesRef.current.forEach((line) => {
					if (line.dash?.animation) {
						line.dash.animation = false;
					}
					line.remove();
				});
				linesRef.current = [];
			}
		};
	}, []);

	// 2) Remove lines whenever the user navigates to a new route
	//    If your component remains "alive" in a layout, this ensures lines are removed.
	useEffect(() => {
		if (linesRef.current.length) {
			linesRef.current.forEach((line) => line.remove());
			linesRef.current = [];
		}
		// Optionally, you could re-draw them here if you *do* want them again on each route.
	}, [pathname]);

	// Ping animation styles
	const styles = `
    @keyframes ping-slow {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.4;
      }
      100% {
        transform: scale(1);
        opacity: 0.8;
      }
    }

    .animate-ping-slow {
      animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animation-delay-300 {
      animation-delay: 300ms;
    }

    .animation-delay-600 {
      animation-delay: 600ms;
    }
  `;

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#f9f8fa] to-[#f8f8fb] flex items-center justify-center p-6">
			<style jsx>{styles}</style>

			<div
				className="p-2 lg:p-8 max-w-6xl w-full relative rounded-xl overflow-hidde flex flex-col items-center justify-center"
				ref={containerRef}
			>
				<div className="text-center mb-12">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-3xl lg:text-4xl font-bold font-twk mb-4 text-gray-900"
					>
						All your HR. One global HR platform.
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className=" text-[0.9rem] lg:text-lg text-gray-600 max-w-4xl mx-auto font-twk"
					>
						Rippling lets you manage and automate all of your people operations
						around the world in one place—from onboarding to offboarding.
					</motion.p>
				</div>

				{/* Three HR phases: onboarding, ongoing, offboarding */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-0 relative z-10 w-[100%] md:w-[70%] gap-[15px] md:gap-[0]">
					<div className="text-center flex items-center justify-start md:justify-center gap-[10px] md:gap-0 md:flex-col">
						<div
							ref={onboardingRef}
							className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-2 relative"
						>
							<AppWindowMacIcon className="text-gray-600" />
							<div className="absolute inset-0 rounded-full border-2 border-[--beige] opacity-0 animate-ping-slow" />
						</div>
						<h3 className="text-lg font-semibold bg-white p-4 text-gray-800">
							Onboarding
						</h3>
					</div>

					<div className="text-center flex items-center justify-start md:justify-center gap-[10px] md:gap-0 md:flex-col">
						<div
							ref={ongoingRef}
							className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-2 relative"
						>
							<BookTemplate className="text-gray-600" />
							<div className="absolute inset-0 rounded-full border-2 border-[--beige] opacity-0 animate-ping-slow animation-delay-300" />
						</div>
						<h3 className="text-lg font-semibold bg-white p-4 text-gray-800">
							Ongoing
						</h3>
					</div>

					<div className="text-center flex items-center justify-start md:justify-center gap-[10px] md:gap-0 md:flex-col">
						<div
							ref={offboardingRef}
							className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-2 relative"
						>
							<Minimize2Icon className="text-gray-600" />
							<div className="absolute inset-0 rounded-full border-2 border-[--beige] opacity-0 animate-ping-slow animation-delay-600" />
						</div>
						<h3 className="text-lg font-semibold bg-white p-4 text-gray-800">
							Offboarding
						</h3>
					</div>
				</div>

				{/* Spacing */}
				{/* <div className="h-40" /> */}

				<img className="hidden xl:flex" src="chart 1.svg" alt="" />

				{/* Four feature "cards" */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10 mt-[40px] xl:mt-0">
					<div
						ref={payrollRef}
						className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="flex items-center mb-4">
							<div className="w-10 h-10 bg-[--beige] shadow-lg rounded flex items-center justify-center mr-3">
								<DollarSign className="text-white" />
							</div>
							<h4 className="text-lg font-semibold text-gray-800">
								Global Payroll
							</h4>
						</div>
						<p className="text-gray-600 text-sm">
							Pay employees and contractors in minutes with a modern payroll
							system that has a 100% accuracy guarantee.
						</p>
						<a
							href="#"
							className="text-[--beige] hover:underline mt-4 inline-block text-sm font-medium"
						>
							Learn more
						</a>
					</div>

					<div
						ref={benefitsRef}
						className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="flex items-center mb-4">
							<div className="w-10 h-10 bg-[--beige] shadow-lg rounded flex items-center justify-center mr-3">
								<HeartIcon className="text-white" />
							</div>
							<h4 className="text-lg font-semibold text-gray-800">Benefits</h4>
						</div>
						<p className="text-gray-600 text-sm">
							Manage your team's benefits—from health insurance to retirement
							plans—in one integrated system.
						</p>
						<a
							href="#"
							className="text-[--beige] hover:underline mt-4 inline-block text-sm font-medium"
						>
							Learn more
						</a>
					</div>

					<div
						ref={timeAttendanceRef}
						className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="flex items-center mb-4">
							<div className="w-10 h-10 bg-[--beige] shadow-lg rounded flex items-center justify-center mr-3">
								<Clock className="text-white" />
							</div>
							<h4 className="text-lg font-semibold text-gray-800">
								Time and Attendance
							</h4>
						</div>
						<p className="text-gray-600 text-sm">
							Hourly employees can easily clock in and out, and their hours
							automatically sync.
						</p>
						<a
							href="#"
							className="text-[--beige] hover:underline mt-4 inline-block text-sm font-medium"
						>
							Learn more
						</a>
					</div>

					<div
						ref={headcountRef}
						className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="flex items-center mb-4">
							<div className="w-10 h-10 bg-[--beige] shadow-lg rounded flex items-center justify-center mr-3">
								<MapPinIcon className="text-white" />
							</div>
							<h4 className="text-lg font-semibold text-gray-800">
								Headcount Planning
							</h4>
						</div>
						<p className="text-gray-600 text-sm">
							Easily manage and stick to your global headcount plan.
						</p>
						<a
							href="#"
							className="text-[--beige] hover:underline mt-4 inline-block text-sm font-medium"
						>
							Learn more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
