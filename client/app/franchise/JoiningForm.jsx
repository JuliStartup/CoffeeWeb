export default function JoiningForm() {
	return (
		<section
			className="relative min-h-[700px] bg-cover bg-center"
			style={{
				backgroundImage: "url(./assets/cup.png)",
			}}
		>
			<div className="absolute inset-0 bg-black/50"></div>
			<div className="relative z-10 flex">
				<div className="hidden md:flex w-full md:w-1/2 flex items-center justify-center">
					<div className="text-5xl w-1/2 text-white font-semibold">
						Beautiful ingredients make beautiful things. This includes cafe
						partners like you.
					</div>
				</div>
				<div className="w-full md:w-1/2 min-h-[700px] flex items-center justify-evenly bg-black/30 backdrop-blur">
					<form className="max-w-md w-full space-y-6 px-10 md:px-0">
						<h2 className="text-3xl font-bold text-white">
							Are you ready to own your own venture?
						</h2>
						<p className="text-white">
							Please enter your information below and a member of our team will
							get in touch with about the next steps required in joining the
							franchise team.
						</p>
						<div>
							<label className="block text-sm text-white">
								Name <span className="mandatory">*</span>
							</label>
							<input
								type="text"
								placeholder="Your Name"
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
							/>
						</div>
						<div>
							<label className="block text-sm text-white">
								Email <span className="mandatory">*</span>
							</label>
							<input
								type="email"
								placeholder="you@example.com"
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
							/>
						</div>
						<div>
							<label className="block text-sm text-white">
								Phone <span className="mandatory">*</span>
							</label>
							<input
								type="tel"
								placeholder="(123) 456-7890"
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
							/>
						</div>
						<div>
							<label className="block text-sm text-white">
								Province/State of interest <span className="mandatory">*</span>
							</label>
							<input
								type="tel"
								placeholder="(123) 456-7890"
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
							/>
						</div>
						<button type="submit" className="w-full bg-[--beige]  py-2 rounded">
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
