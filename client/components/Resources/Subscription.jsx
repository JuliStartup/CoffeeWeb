"use client";

export default function Subscription() {
	return (
		<div className="flex gap-6 p-6 bg-gray-50 pl-[6em] justify-between h-[500px] max-w-4xl">
			<div className="flex bg-[--silver] cursor-pointer items-center justify-center text-center text-2xl px-4">
				<strong> BUILD YOUR OWN BUNDLE SUBSCRIPTION AND SAVE!</strong>
			</div>
			<div className="hover:bg-gray-50 w-[50%]">
				<img
					src="./assets/white_leaf.jpg"
					alt="Product Image"
					className="object-contain rounded-md h-[50%]"
				/>
				<img
					src="./assets/SubscriptionBox.png"
					alt="Product Image"
					className="object-cover rounded-md"
				/>
			</div>
			<div
				// key={product.id}
				className="relative rounded-2xl hover:bg-gray-50 cursor-pointer w-full"
				// onClick={() => onSelect(product.id)}
			>
				{/* <span className="absolute -top-4 -left-4 bg-[--badge] text-white text-sm font-bold w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-20 text-center">
							New Release
						</span> */}
				<div className="flex p-6 flex-col md:flex-row justify-between bg-[--product_bg]">
					<div className="border-4">
						<ul className="text-sm text-gray-600 p-2 text-center space-y-1">
							<li>
								<strong> {"product"}</strong>
							</li>

							<li>
								<p className="text-lg">Vendor:{}</p>
							</li>
						</ul>
					</div>
					<div className="h-40 md:h-48">
						<img
							src="./assets/Bag.png"
							alt="Product Image"
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
				</div>
				<div className="flex p-4 pb-0 justify-between items-center font-bold text-gray-800 border-t-2 border-black">
					<div>
						{/* <p>{product.title}</p> */}
						{/* <p>in stock</p> */}
					</div>
					{/* <span>$34</span> */}
				</div>
				{/* Roast Bars */}
				<div className="flex pb-2 px-4 justify-end space-x-1">
					<strong></strong>
					{[...Array(5)].map((_, i) => (
						<div key={i} className={`w-2 h-5 rounded bg-gray-300`} />
					))}
				</div>
			</div>
		</div>
	);
}
