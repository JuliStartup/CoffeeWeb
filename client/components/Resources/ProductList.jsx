"use client";

import StoreService from "@/services/StoreService";
import { useEffect, useState } from "react";

export default function ProductList({ onSelect }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const { data } = await StoreService.getAllProducts();
				setProducts(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchAllProducts();
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 pl-[6em]">
			{products?.map((product) => {
				const roastHandle = product.handle.toLowerCase();
				let roastLevel = 0;
				if (roastHandle.includes("light")) roastLevel = 1;
				else if (roastHandle.includes("medium")) roastLevel = 2;
				else if (roastHandle.includes("dark")) roastLevel = 3;

				return (
					<div
						key={product.id}
						className="relative shadow-lg rounded-2xl hover:bg-gray-50 cursor-pointer border-b-4 border-gray-200 max-w-xs"
						onClick={() => onSelect(product.id)}
					>
						<span className="absolute -top-4 -left-4 bg-[--badge] text-white text-sm font-bold w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-20 text-center">
							New Release
						</span>
						<div className="flex p-6 flex-col md:flex-row justify-between bg-[--product_bg]">
							<div className="border-4">
								<ul className="text-sm text-gray-600 p-2 text-center space-y-1">
									<li>
										<strong> {product.title}</strong>
									</li>
									<li>
										<strong> {product.product_type}</strong>
									</li>
									<li>
										<strong>Weight:</strong> {product.variants[0].weight}{" "}
										{product.variants[0].weight_unit}
									</li>
									<li>
										<p className="text-lg">Vendor:{product.vendor}</p>
									</li>
									<li>
										<strong>SKU:</strong> {product.variants[0].sku || "N/A"}
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
								<p>{product.title}</p>
								<p>{product.variants[0].inventory_quantity} in stock</p>
							</div>
							<span>${product.variants[0].price}</span>
						</div>
						{/* Roast Bars */}
						<div className="flex pb-2 px-4 justify-end space-x-1">
							<strong>{product.handle}</strong>
							{[...Array(5)].map((_, i) => (
								<div
									key={i}
									className={`w-2 h-5 rounded ${
										i < roastLevel ? "bg-green-500" : "bg-gray-300"
									}`}
								/>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}
