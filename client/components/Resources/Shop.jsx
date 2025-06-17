"use client";

import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Subscription from "./Subscription";

export default function Shop() {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<div className="max-w-8xl mx-auto mt-0">
			{selectedId ? (
				<ProductDetail
					productId={selectedId}
					onBack={() => setSelectedId(null)}
				/>
			) : (
				<div className="bg-gray-50">
					<ProductList onSelect={setSelectedId} />
					<Subscription />
				</div>
			)}
		</div>
	);
}
