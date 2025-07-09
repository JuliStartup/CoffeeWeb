"use client";

export default function Subscription() {
	return (
		<div className="bg-white rounded-2xl shadow-lg p-6 mx-auto space-y-4">
			<p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
				Never Run Out of Coffee
			</p>

			<h2 className="text-3xl font-bold text-gray-900">Coffee Subscriptions</h2>

			<p className="text-lg text-gray-700">
				Great coffee delivered right to your door.
			</p>

			<p className="text-gray-600">
				Subscribe and enjoy freshly roasted beans with flexible delivery
				options. Customize your plan anytime.
			</p>

			<div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg font-medium">
				Save 10% on every order
			</div>
			<div className="flex justify-between items-center">
				<label className="flex items-start space-x-2 cursor-pointer">
					<input
						type="checkbox"
						className="mt-1 accent-yellow-500 w-5 h-5 rounded"
					/>
					<span className="text-sm text-gray-700">
						Save an extra <strong>25% on your first subscription</strong>
					</span>
				</label>

				<button className="py-[0.5em] px-[2.25rem] bg-[--featured] hover:bg-yellow-700 text-white font-semibold rounded-lg transition">
					Discover Options
				</button>
			</div>
		</div>
	);
}
