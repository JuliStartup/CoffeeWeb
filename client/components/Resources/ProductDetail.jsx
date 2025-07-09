"use client";

import { getNumericCode } from "@/services";
import StoreService from "@/services/StoreService";
import { CircleCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ProductDetail({ productId, onBack }) {
	const quantityOptions = [
		{
			qty: 1,
			price: 18.99,
			saved: null,
			label: <span className="line-through">$33.99</span>,
		},
		{ qty: 3, price: 17.1, saved: 10, label: "Per Pack" },
		{ qty: 6, price: 15.19, saved: 20, label: "Per Pack" },
	];

	const frequencyOptions = useRef(null);

	const [product, setProduct] = useState(null);
	const [flavors, setFlavors] = useState(null);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedQty, setSelectedQty] = useState(1);
	const [selectedOption, setSelectedOption] = useState("onetime");
	const [frequency, setFrequency] = useState("");

	useEffect(() => {
		const fetchProductInfo = async () => {
			try {
				const { data } = await StoreService.getProductInfo(productId);
				setProduct(data.product);
				frequencyOptions.current =
					data.product?.variants?.edges[0].node?.sellingPlanAllocations?.edges;
				setFrequency(
					data.product?.variants?.edges[0].node?.sellingPlanAllocations
						?.edges[0].node?.sellingPlan.id,
				);
				setSelectedImage(data.product?.images?.edges[0]?.node?.src);
				setFlavors(data?.flavor);
			} catch (error) {
				console.error(error);
			}
		};
		if (productId) {
			fetchProductInfo();
		}
	}, [productId]);

	const handleSubscribeNow = async () => {
		const url = `https://wyndclub.myshopify.com`;
		const body = {
			id: getNumericCode(product?.variants?.edges[0].node?.id),
			quantity: selectedQty,
			selling_plan: getNumericCode(frequency),
		};
		const { data } = await StoreService.addSubscriptionPlan(body);
		// window.location.href = `${url}/cart`;
	};

	const handleBuyNow = () => {
		const url = `https://wyndclub.myshopify.com/cart/${getNumericCode(
			product?.variants?.edges[0].node?.id,
		)}:${selectedQty}`;
		window.location.href = url;
	};

	return (
		<div className="py-4 max-w-7xl mx-auto">
			<nav className="text-sm text-[--card_TextColor] mb-4">
				<button
					onClick={onBack}
					className="hover:underline text-[--card_TextColor] "
				>
					← Back to Shop
				</button>
			</nav>

			<div className="flex flex-col lg:flex-row gap-8">
				<div className="flex flex-col gap-2 overflow-y-auto max-h-[400px]">
					{product?.images?.edges?.map((img, idx) => (
						<img
							key={idx}
							src={img.node.src}
							alt={`Thumbnail ${idx}`}
							onClick={() => setSelectedImage(img.node.src)}
							className={`w-20 h-20 object-cover border rounded cursor-pointer hover:opacity-75 ${
								selectedImage === img.node.src ? "ring-4 ring-[--badge]" : ""
							}`}
						/>
					))}
				</div>
				{/* Main Product Image */}
				<div className="cursor-pointer">
					{selectedImage && (
						<img
							src={selectedImage}
							alt={product.title}
							className="w-full max-w-lg mx-auto rounded-lg border"
						/>
					)}
				</div>

				{/* Product Details */}
				<div className="flex-1 flex flex-col justify-between gap-4">
					<div>
						<h2 className="text-4xl font-semibold cursor-pointer">
							{product?.title}
						</h2>
						{flavors?.map((tag) => (
							<div className="inline mr-5 text-md text-gray-800" key={tag}>
								<span>{tag}</span>
							</div>
						))}
					</div>
					{/* Product Description */}
					<div className="text-lg text-gray-800">{product?.description}</div>
					<div>
						<div className="text-xl text-[--highlight] font-bold">
							Select quantity
						</div>
						<div className="grid items-start w-full max-w-lg gap-4 pt-2 grid-cols-3">
							{quantityOptions.map((opt) => {
								const isSelected = selectedQty === opt.qty;

								return (
									<div
										key={opt.qty}
										onClick={() => setSelectedQty(opt.qty)}
										className={`relative rounded-lg border-2 text-center cursor-pointer transition-all ${
											isSelected ? "border-[--selected]" : "border-gray-300"
										}`}
									>
										{/* Green Check Icon */}
										{isSelected && (
											<span className="absolute top-0 inset-x-0 mx-auto -mt-2.5 text-white left-[4.3em]">
												<CircleCheck
													className="bg-[--selected] rounded-full "
													size={20}
												/>
											</span>
										)}
										<div className="text-md mt-3">{opt.qty} </div>
										<div className="text-xl font-bold">
											${opt.price.toFixed(2)}
										</div>
										<div className="text-lg block mb-3">{opt.label} </div>
										{opt.saved && (
											<div className="py-1 bg-[red] rounded-lg font-semibold text-white">
												Save {opt.saved}%
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<div className="text-xl text-[--highlight] font-bold">
							Select frequency
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label
								className={`flex flex-col gap-3 cursor-pointer border rounded-lg p-4 w-full ${
									selectedOption === "subscribe"
										? "border-green-500 ring-2 ring-green-300"
										: "border-gray-300"
								}`}
							>
								<div className="flex items-center gap-2 w-full">
									{/* Hidden actual input */}
									<input
										type="radio"
										name="purchaseOption"
										value="subscribe"
										checked={selectedOption === "subscribe"}
										onChange={() => setSelectedOption("subscribe")}
										className="sr-only"
									/>
									{/* Custom circle with check */}
									<div
										className={`h-5 w-5 rounded-full border-2 flex items-center justify-center  ${
											selectedOption === "subscribe"
												? "border-green-600 bg-green-600"
												: "border-gray-400"
										} `}
									>
										{selectedOption === "subscribe" && (
											<CircleCheck className="text-white w-4 h-4" />
										)}
									</div>
									<span className="text-lg text-gray-800">
										Subscribe & Save Extra
									</span>
								</div>
								{selectedOption === "subscribe" && (
									<div className="w-full px-7">
										<label className="block mb-1 text-gray-700">
											Select Autoship Frequency:
										</label>
										<select
											value={frequency}
											onChange={(e) => setFrequency(e.target.value)}
											className="w-full border border-gray-300 rounded-lg p-1  mb-1"
										>
											{frequencyOptions?.current.map(({ node }) => (
												<option
													key={node.sellingPlan.id}
													value={node.sellingPlan.id}
												>
													{node.sellingPlan.name}
												</option>
											))}
										</select>
									</div>
								)}
							</label>

							<label
								className={`flex flex-col gap-3 cursor-pointer border rounded-lg p-4 w-full ${
									selectedOption === "onetime"
										? "border-green-500 ring-2 ring-green-300"
										: "border-gray-300"
								}`}
							>
								<div className="flex items-center gap-2 w-full">
									<input
										type="radio"
										name="purchaseOption"
										value="subscribe"
										checked={selectedOption === "onetime"}
										onChange={() => setSelectedOption("onetime")}
										className="sr-only"
									/>
									<div
										className={`h-5 w-5 rounded-full border-2 flex items-center justify-center  ${
											selectedOption === "onetime"
												? "border-green-600 bg-green-600"
												: "border-gray-400"
										} `}
									>
										{selectedOption === "onetime" && (
											<CircleCheck className="text-white w-4 h-4" />
										)}
									</div>
									<span className="text-gray-800">Buy One-Time</span>
								</div>
							</label>
						</div>
					</div>
					<div
						className="flex items-center justify-center us-max:flex-col 2xl:flex-row lg:flex-col"
						onClick={() =>
							selectedOption === "onetime"
								? handleBuyNow()
								: handleSubscribeNow()
						}
					>
						<div className="py-2 mb-4 btn-buy text-center text-bold text-white md:mb-0 text-lg sm-only:px-1.5 cursor-pointer w-full">
							{selectedOption === "subscribe"
								? `Start Subscription`
								: `Add to Cart`}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
