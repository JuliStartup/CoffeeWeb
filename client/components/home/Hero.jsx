"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
	const videoRef = useRef(null);
	const videoRef1 = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.3;
		}
		if (videoRef1.current) {
			videoRef1.current.playbackRate = 0.3;
		}
	}, []);
	return (
		<div className="relative bg-gradient-to-b from-[#f8f8fb] to-[#f9f8fa] w-full overflow-hidden flex items-center justify-center mt-[-3em]">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center bg-white">
				<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
					<video
						src="./cover.mp4"
						className="w-full h-full object-cover transform scale-x-1"
						autoPlay
						loop
						muted
						playsInline
						ref={videoRef1}
					/>
				</div>
				{/* <div className="space-4 text-center xl:text-left">
					<h1>
						<BlurText
							text="Subscribe and save"
							delay={50}
							animateBy="words"
							direction="top"
							className="font-twk text-neutral-800 text-5xl md:text-5xl xl:text-6xl leading-[1.1] md:leading-tight tracking-tight font-semibold max-w-lg md:max-w-2xl mx-auto xl:mx-0 mt-[0vh] sm:mt-0"
						/>
					</h1>
					<div className="flex flex-col md:flex-row max-w-md gap-4 pt-4 mx-auto xl:mx-0 items-center">
						<Input
							type="email"
							placeholder="Enter your email"
							className="bg-white flex-grow px-3 py-6 border-b-2 text-sm"
						/>

						<a className="w-full py-4 bg-[--primaryColor] rounded-lg font-twk font-semibold text-white text-center text-sm">
							Start Free Trial
						</a>
					</div>
				</div> */}
				<div className="relative aspect-[4/3] overflow-hidden bg-transparent">
					<img
						src="./assets/SubscriptionBox.png"
						alt="Person working on laptop"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="relative aspect-[4/3]  rounded-lg overflow-hidden">
					<video
						src="./cover.mp4"
						className="w-full h-full object-cover transform scale-x-[-1]"
						autoPlay
						loop
						muted
						playsInline
						ref={videoRef}
					/>
				</div>
			</div>
		</div>
	);
}
