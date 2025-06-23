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
		<div className="relative bg-gradient-to-b from-[#f8f8fb] to-[#f9f8fa] w-full  overflow-hidden flex items-center justify-center md:mt-[-3em]">
			<div className="grid grid-cols-3 md:grid-cols-3 gap-0 items-center bg-white">
				<div className="rounded-lg overflow-hidden">
					<video
						src="./cover.mp4"
						className="w-full h-full object-contain transform scale-x-1"
						autoPlay
						loop
						muted
						playsInline
						ref={videoRef1}
					/>
				</div>
				<div className="overflow-hidden bg-transparent lg:mb-[-3em]">
					<img
						src="./assets/cup.png"
						alt="Person working on laptop"
						// className="object-scale-down w-full h-[80px] md:h-[150px] lg:h-[22em]"
						className="object-contain w-full h-full"
					/>
				</div>
				<div className=" rounded-lg overflow-hidden">
					<video
						src="./cover.mp4"
						className="w-full h-full object-contain transform scale-x-[-1]"
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
