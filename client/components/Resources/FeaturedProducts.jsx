"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";

export default function FeaturedProducts({ products, onSelect }) {
	const scrollRef = useRef(null);
	const [quantity, setQuantity] = useState(1);
	const price = products?.variants?.edges[0].node?.price?.amount || 0;
	const total = (quantity * parseFloat(price)).toFixed(2);
	const handleBuyNow = (variantId) => {
		const parts = variantId.split("/");
		const numericId = parts[parts.length - 1];

		const url = `https://wyndclub.myshopify.com/cart/${numericId}:${quantity}`;
		window.location.href = url;
	};

	const scroll = (direction) => {
		if (scrollRef.current) {
			const width = scrollRef.current.clientWidth;
			scrollRef.current.scrollBy({
				left: direction === "left" ? -width : width,
				behavior: "smooth",
			});
		}
	};
	return (
		<div className="relative w-full overflow-hidden py-6">
			<button
				onClick={() => scroll("left")}
				className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[--badge] text-white p-3 shadow"
			>
				<MoveLeft />
			</button>
			<div
				ref={scrollRef}
				className="flex snap-x snap-mandatory overflow-hidden scroll-smooth no-scrollbar"
			>
				{products?.map((product) => {
					const flavors =
						product.metaFields?.product.flavor.references?.edges.map(
							({ node }) => {
								const metaFields = node.fields || [];
								const flat = metaFields.reduce((acc, field) => {
									acc[field.key] = field.value;
									return acc;
								}, {});
								return flat.label;
							},
						) || [];
					return (
						<div
							key={product.id}
							className="w-full flex-shrink-0 snap-start px-4"
						>
							<div className="flex flex-col lg:flex-row gap-8">
								<div
									onClick={() => onSelect(product.id)}
									className="flex-1 cursor-pointer"
								>
									<span className="absolute bg-[--badge] left-28 top-1 p-2 w-24 shadow-md z-20 text-center">
										{product?.tags.toUpperCase()}
									</span>
									{product?.metaFields?.product?.images?.edges[0] && (
										<img
											src={
												product?.metaFields?.product.images?.edges[0]?.node?.src
											}
											alt={product.title}
											className="w-full max-w-lg mx-auto rounded-lg border"
										/>
									)}

									<div className="flex flex-wrap gap-2 mt-4 justify-center">
										{product?.metaFields?.product?.images?.edges?.map(
											(img, idx) => (
												<img
													key={idx}
													src={img.node.src}
													alt={`Thumbnail ${idx}`}
													className="w-20 h-20 object-cover rounded border cursor-pointer hover:opacity-75"
												/>
											),
										)}
									</div>
								</div>
								<div className="flex-1 flex flex-col gap-0 justify-between">
									<div>
										<h2
											className="text-3xl font-semibold pt-12 cursor-pointer"
											onClick={() => onSelect(product.id)}
										>
											{product?.title}
										</h2>
										{flavors?.map((tag) => (
											<div className="inline mr-5" key={tag}>
												<span>{tag}</span>
											</div>
										))}
										<p className="font-bold mt-5">
											$
											{
												product?.metaFields?.product?.variants?.edges[0].node
													?.price?.amount
											}
										</p>
									</div>
									<div className="prose">
										{product?.metaFields?.product?.description}
									</div>

									<div className="flex justify-between items-end gap-2 w-[fit-content]">
										<div className="flex items-center gap-2">
											<button
												className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
												onClick={() => setQuantity(Math.max(1, quantity - 1))}
											>
												−
											</button>
											<span className="px-4">{quantity}</span>
											<button
												className="px-3 py-1 bg-gray-200 rounded-lg text-lg font-bold"
												onClick={() => setQuantity(quantity + 1)}
											>
												+
											</button>
										</div>
										<p
											className="font-bold text-xl"
											onClick={() => onSelect(product.id)}
										>
											1lb bag
										</p>
										<img
											src="./assets/Bag.png"
											alt={`Thumbnail`}
											className="w-50 h-80 object-cover cursor-pointer hover:opacity-75"
										/>
									</div>
									<button
										className="bg-[--beige] text-[--card_TextColor] px-6 py-4 font-bold rounded-lg hover:bg-[--beige] w-full"
										onClick={() =>
											handleBuyNow(
												product?.metaFields?.product?.variants?.edges[0].node
													?.id,
											)
										}
									>
										ADD TO CART - ${total}
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<button
				onClick={() => scroll("right")}
				className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[--badge] text-white p-3 shadow"
			>
				<MoveRight />
			</button>
		</div>
	);
}
