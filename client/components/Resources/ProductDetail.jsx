"use client";

import StoreService from "@/services/StoreService";
import { useEffect, useState } from "react";

export default function ProductDetail({ productId, onBack }) {
	const [product, setProduct] = useState(null);
	const [flavors, setFlavors] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const price = product?.variants?.edges[0].node?.price?.amount || 0;
	const total = (quantity * parseFloat(price)).toFixed(2);

	useEffect(() => {
		const fetchProductInfo = async () => {
			try {
				const { data } = await StoreService.getProductInfo(productId);
				setProduct(data.product);
				setFlavors(data?.flavor);
			} catch (error) {
				console.error(error);
			}
		};
		if (productId) {
			fetchProductInfo();
		}
	}, [productId]);

	const handleBuyNow = (variantId) => {
		const parts = variantId.split("/");
		const numericId = parts[parts.length - 1];

		const url = `https://wyndclub.myshopify.com/cart/${numericId}:${quantity}`;
		window.location.href = url;
	};

	return (
		<div className="py-4 px-12 max-w-7xl mx-auto">
			<nav className="text-sm text-[--card_TextColor] mb-4">
				<button
					onClick={onBack}
					className="hover:underline text-[--card_TextColor] "
				>
					← Back to Shop
				</button>
			</nav>

			<div className="flex flex-col lg:flex-row gap-8">
				<div className="flex-1">
					{product?.images?.edges[0] && (
						<img
							src={product.images?.edges[0]?.node?.src}
							alt={product.title}
							className="w-full max-w-md mx-auto rounded border"
						/>
					)}

					{/* Image Carousel */}
					<div className="flex flex-wrap gap-2 mt-4 justify-center">
						{product?.images?.edges?.map((img, idx) => (
							<img
								key={idx}
								src={img.node.src}
								alt={`Thumbnail ${idx}`}
								className="w-20 h-20 object-cover rounded border cursor-pointer hover:opacity-75"
							/>
						))}
					</div>
				</div>

				<div className="flex-1">
					{flavors?.map((tag) => (
						<div className="inline mr-5" key={tag}>
							<span>{tag}</span>
						</div>
					))}
					<h2 className="text-3xl my-2">{product?.title}</h2>
					<p className="font-bold  mb-4">
						${product?.variants?.edges[0].node?.price?.amount}
						{product?.variants?.edges[0].node?.price?.currencyCode}
					</p>
					{/* Product Description */}
					<div className="prose mb-4">{product?.description}</div>
					<div className="flex justify-between items-end mb-4 gap-2 w-[fit-content]">
						<div className="flex items-center gap-2">
							<button
								className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
								onClick={() => setQuantity(Math.max(1, quantity - 1))}
							>
								−
							</button>
							<span className="px-4">{quantity}</span>
							<button
								className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
								onClick={() => setQuantity(quantity + 1)}
							>
								+
							</button>
						</div>
						<p className="font-bold text-xl"> 1lb bag </p>
						<img
							src="./assets/Bag.png"
							alt={`Thumbnail`}
							className="w-50 h-80 object-cover rounded border cursor-pointer hover:opacity-75"
						/>
					</div>
					<button
						className="bg-[--beige] text-[--card_TextColor] px-6 py-4 font-bold rounded hover:bg-[--beige] w-full"
						onClick={() => handleBuyNow(product?.variants?.edges[0].node?.id)}
					>
						ADD TO CART - ${total}
					</button>
				</div>
			</div>
		</div>
	);
}
