"use client";

import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default function Shop() {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<div className="mt-0 px-5 pt-6 mx-auto max-w-screen-2xl md:px-7 lg:px-14 xl:px-20 2xl:px-12 md:pt-9 xl:pt-6">
			{selectedId ? (
				<ProductDetail
					productId={selectedId}
					onBack={() => setSelectedId(null)}
				/>
			) : (
				<div className="bg-gray-50">
					<ProductList onSelect={setSelectedId} />
					{/* <Subscription /> */}
				</div>
			)}
		</div>
	);
}
