"use client";

import { useEffect, useState } from "react";

export default function ProductDetail({ productId, onBack }) {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		if (productId) {
			fetch(`/api/product/${productId}`)
				.then((res) => res.json())
				.then(setProduct)
				.catch(console.error);
		}
	}, [productId]);

	return (
		<div className="p-4 border rounded">
			<button onClick={onBack} className="mb-4 text-blue-600 underline">
				← Back to Products
			</button>
			<h2 className="text-xl font-bold mb-2">{product?.title}</h2>
			<div dangerouslySetInnerHTML={{ __html: product?.body_html }} />
			{product?.images?.[0] && (
				<img
					src={product.images[0].src}
					alt={product.title}
					className="mt-4 w-64"
				/>
			)}
		</div>
	);
}
