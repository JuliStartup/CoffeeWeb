"use client";

import StoreService from "@/services/StoreService";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Subscription from "./Subscription";

export default function Shop() {
	const [selectedId, setSelectedId] = useState(null);
	const [products, setProducts] = useState(null);
	const [featuredProducts, setFeaturedProducts] = useState(null);
	const [isDataLoaded, setIsDataLoaded] = useState(false);
	const [product, setProduct] = useState(null);
	const [flavors, setFlavors] = useState(null);

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const { data } = await StoreService.getAllProducts();
				setProducts(data.all);
				setFeaturedProducts(data.featured);
			} catch (error) {
				console.error(error);
			} finally {
				setIsDataLoaded(true);
			}
		};
		const fetchProductInfo = async () => {
			try {
				const { data } = await StoreService.getProductInfo(selectedId);
				setProduct(data.product);
				setFlavors(data?.flavor);
			} catch (error) {
				console.error(error);
			}
		};
		if (selectedId) {
			fetchProductInfo();
		} else {
			fetchAllProducts();
		}
	}, [selectedId]);

	return (
		<div
			className={`mt-0 px-3 pt-6 mx-auto max-w-screen-2xl md:px-7 lg:px-14 xl:px-20 2xl:px-12 md:pt-9 xl:pt-6 transition`}
		>
			{selectedId && product ? (
				<ProductDetail
					flavors={flavors}
					product={product}
					onBack={() => setSelectedId(null)}
				/>
			) : isDataLoaded ? (
				<div className={`flex flex-col gap-[2rem]`}>
					{featuredProducts && (
						<FeaturedProducts
							onSelect={setSelectedId}
							products={featuredProducts}
						/>
					)}
					<Subscription />
					<div className="px-3">
						<ProductList onSelect={setSelectedId} products={products} />
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center mt-[10%]">
					<Loader2 className="w-12 h-12 text-[--featured] animate-spin" />
				</div>
			)}
		</div>
	);
}
