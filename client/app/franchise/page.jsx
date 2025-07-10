"use client";

import FranchiseFAQ from "./FranchiseFAQ";
import JoiningForm from "./JoiningForm";

export default function Page() {
	return (
		<>
			<section className="bg-gradient-to-r from-[--beige] to-[--cover_bag]  py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<p className="text-sm uppercase tracking-widest mb-2">
						in 3 easy steps
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Become a successful franchise owner
					</h2>
					<p className="text-lg mb-6">
						Unlock exclusive content and connect with like-minded individuals.
						Enjoy members-only events, resources, and personalized support. Be
						part of a growing network that shares your passion and goals. Stay
						ahead with insider tips, updates, and insights from experts. Start
						your journey now and make your voice heard in our community.
					</p>
					<a
						href="#join"
						className="inline-block text-[--featured] font-semibold px-6 py-3 shadow-xl transition"
					>
						Start by submitting your initial application through the form below
					</a>
				</div>
			</section>
			<JoiningForm />
			<FranchiseFAQ />
		</>
	);
}
