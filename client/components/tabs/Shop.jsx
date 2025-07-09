"use client";

import StoreService from "@/services/StoreService";
import { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Subscription from "./Subscription";

export default function Shop() {
	const [selectedId, setSelectedId] = useState(null);
	const [products, setProducts] = useState(null);
	const [featuredProducts, setFeaturedProducts] = useState(null);

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const { data } = await StoreService.getAllProducts();
				setProducts(data);
				setFeaturedProducts(data.filter(({ tags }) => tags === "Featured"));
			} catch (error) {
				console.error(error);
			}
		};
		fetchAllProducts();
	}, []);

	return (
		<div className="mt-0 px-5 pt-6 mx-auto max-w-screen-2xl md:px-7 lg:px-14 xl:px-20 2xl:px-12 md:pt-9 xl:pt-6">
			{selectedId ? (
				<ProductDetail
					productId={selectedId}
					onBack={() => setSelectedId(null)}
				/>
			) : (
				products && (
					<div className="flex flex-col gap-[8rem]">
						{featuredProducts && (
							<FeaturedProducts
								onSelect={setSelectedId}
								products={featuredProducts}
							/>
						)}
						<Subscription />
						<ProductList onSelect={setSelectedId} products={products} />
					</div>
				)
			)}
		</div>
	);
}
