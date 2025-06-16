"use client";

import { useEffect, useState } from "react";

export default function ProductList({ onSelect }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("/api/products")
			.then((res) => res.json())
			.then(setProducts)
			.catch(console.error);
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-0 pl-4 items-center bg-white">
			{products.map((product) => (
				<div
					key={product.id}
					className="d-flex border p-4 rounded hover:bg-gray-50 cursor-pointer"
					onClick={() => onSelect(product.id)}
				>
					<h3 className="font-bold">{product.title}</h3>{" "}
					<img
						src="./assets/Bag.png"
						alt="Person working on laptop"
						className="object-contain "
					/>
				</div>
			))}
		</div>
	);
}
