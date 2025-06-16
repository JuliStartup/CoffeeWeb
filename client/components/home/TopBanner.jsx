"use client";
import { memo, useState } from "react";
import Countdown from "./Countdown"; // import the child component

const targetDate = new Date("Mar 30, 2025 18:00:00").getTime();

function TopBanner() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Email submitted:", email);
		setEmail("");
	};

	return (
		<div className="top_banner w-full bg-[--beige] py-0 hidden xl:block">
			<div className="w-full px-2 mx-auto max-w-6xl">
				<div className="flex flex-col md:flex-row items-center justify-between gap-2">
					{/* Countdown component */}
					{/* <Countdown targetDate={targetDate} /> */}

					{/* <div className="hidden md:block w-full md:w-auto text-center">
						<p className="bg-[#2b1738] font-twk font-medium text-white rounded-lg p-2">
							GET 6 MONTHS FREE
							<span className="font-normal">ON YOUR FIRST MODULE</span>
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}

// Wrap with memo:
export default memo(TopBanner);
