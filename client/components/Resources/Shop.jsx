"use client";

import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default function Shop() {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">All Products</h1>
			{selectedId ? (
				<ProductDetail
					productId={selectedId}
					onBack={() => setSelectedId(null)}
				/>
			) : (
				<ProductList onSelect={setSelectedId} />
			)}
		</div>
	);
}
