"use client";
import { useEffect, useState } from "react";

export default function HomeSampleShopify() {
	const [productList, setProducts] = useState([]);

	useEffect(() => {
		fetch("/api/products")
			.then((res) => res.json())
			.then(setProducts);
	}, []);

	const handleBuyNow = (variantId) => {
		// variantId is Base64 encoded gid, decode to get numeric ID
		// const decoded = atob(variantId);
		// const parts = decoded.split("/");
		// const numericId = parts[parts.length - 1];

		// // Redirect to Shopify cart URL
		const checkoutUrl = `https://${domain}/cart/${variantId}:1`;
		window.location.href = checkoutUrl;
	};

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold mb-4">Admin-Fetched Products</h1>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{productList?.map((product) => {
					const variant = product?.variants[0];
					const image = product?.images[0];

					return (
						<div
							key={product?.id}
							style={{
								border: "1px solid #ccc",
								margin: 10,
								padding: 10,
								width: 300,
							}}
						>
							<h2>{product?.title}</h2>
							{image && (
								<img
									src={image.src}
									alt={image.altText || product?.title}
									style={{ width: "100%" }}
								/>
							)}
							<p>{product?.description}</p>
							<p>
								Price: {variant.price.amount} {variant.price.currencyCode}
							</p>
							<button onClick={() => handleBuyNow(variant.id)}>Buy Now</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
