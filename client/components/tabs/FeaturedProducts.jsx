"use client";

import { useCart } from "@/contexts/CartContext";
import StoreService from "@/services/StoreService";
import { MoveLeft, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FeaturedProducts({ products, onSelect }) {
	const scrollRef = useRef(null);
	const [quantity, setQuantity] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);
	const [selectedFlavor, setSelectedFlavor] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const price =
		products[0]?.metaFields?.product?.variants?.edges[0].node?.price?.amount ||
		0;
	const { cartID, updateCart, updateQuantity } = useCart();

	useEffect(() => {
		setTotalAmount((quantity * parseFloat(price)).toFixed(2));
	}, [quantity]);

	// const handleBuyNow = (variantId) => {
	// 	const url = `https://wyndclub.myshopify.com/cart/${getNumericCode(
	// 		variantId,
	// 	)}:${quantity}`;
	// 	window.location.href = url;
	// };

	const handleCart = async (variantId) => {
		setIsSubmitting(true);
		try {
			if (cartID) {
				const { data } = await StoreService.updateCart({
					cartId: cartID,
					variantId,
					quantity,
				});
				toast.success("Cart updated successfully!");
				updateQuantity(data?.cartLinesAdd?.cart?.lines?.edges?.length);
				updateCart(
					data?.cartLinesAdd?.cart?.id,
					data?.cartLinesAdd?.cart?.checkoutUrl,
				);
			} else {
				const { data } = await StoreService.addCart({
					variantId,
					quantity,
				});
				toast.success("Item added to cart!");
				updateQuantity(data?.cart?.lines?.edges?.length);
				updateCart(data?.cart?.id, data?.cart?.checkoutUrl);
			}
		} catch (error) {
		} finally {
			setIsSubmitting(false);
			setQuantity(0);
		}
	};

	const scroll = (direction) => {
		if (scrollRef.current) {
			const width = scrollRef.current.clientWidth;
			scrollRef.current.scrollBy({
				left: direction === "left" ? -width : width,
				behavior: "smooth",
			});
		}
	};
	return (
		<div className="relative w-full overflow-hidden py-6">
			<button
				onClick={() => scroll("left")}
				className="absolute top-[20%] md:top-1/2 md:left-2 z-10 -translate-y-1/2 rounded-full bg-[--badge] text-white p-3 shadow"
			>
				<MoveLeft className="w-3 h-3 md:w-6 md:h-6" />
			</button>
			<div
				ref={scrollRef}
				className="flex snap-x snap-mandatory overflow-hidden scroll-smooth no-scrollbar"
			>
				{products?.map((product) => {
					const flavors =
						product.metaFields?.product.flavor?.references?.edges.map(
							({ node }) => {
								const metaFields = node.fields || [];
								const flat = metaFields.reduce((acc, field) => {
									acc[field.key] = field.value;
									return acc;
								}, {});
								return flat.label;
							},
						) || [];
					const productId =
						product?.metaFields?.product?.variants?.edges[0].node?.id;
					return (
						<div
							key={product.id}
							className="w-full flex-shrink-0 snap-start md:px-4"
						>
							<div className="flex flex-col lg:flex-row gap-8">
								<div
									onClick={() => onSelect(product.id)}
									className="flex-1 cursor-pointer"
								>
									<span className="absolute bg-[--badge] left-28 top-1 p-2 w-24 shadow-md md:z-20 text-center">
										{product?.tags.toUpperCase()}
									</span>
									{product?.metaFields?.product?.images?.edges[0] && (
										<img
											src={
												product?.metaFields?.product.images?.edges[0]?.node?.src
											}
											alt={product.title}
											className="w-full max-w-lg mx-auto rounded-lg border"
										/>
									)}

									<div className="flex flex-wrap gap-2 mt-4 justify-center">
										{product?.metaFields?.product?.images?.edges?.map(
											(img, idx) => (
												<img
													key={idx}
													src={img.node.src}
													alt={`Thumbnail ${idx}`}
													className="w-20 h-20 object-cover rounded border cursor-pointer hover:opacity-75"
												/>
											),
										)}
									</div>
								</div>
								<div className="flex-1 flex flex-col justify-between">
									<div className="flex flex-col gap-2">
										<h2
											className="text-3xl font-semibold cursor-pointer"
											onClick={() => onSelect(product.id)}
										>
											{product?.title}
										</h2>
										{/* <div className="d-inline">
											{flavors?.map((tag) => (
												<span className="inline mr-5" key={tag}>
													{tag}
												</span>
											))}
										</div> */}
										{flavors && (
											<div>
												{/* <div className="text-lg text-[--highlight] font-bold">
													Choose a flavor
												</div> */}
												<div className="flex w-full max-w-lg gap-4">
													{flavors?.map((flavor) => (
														<button
															key={flavor}
															onClick={() => setSelectedFlavor(flavor)}
															className={`px-3 py-1 rounded-full border text-sm  ${
																selectedFlavor === flavor
																	? "bg-[--selected] text-white"
																	: "bg-gray-100 text-gray-800"
															}`}
														>
															{flavor}
														</button>
													))}
												</div>
											</div>
										)}
										<p className="font-bold ">
											$
											{
												product?.metaFields?.product?.variants?.edges[0].node
													?.price?.amount
											}
										</p>
									</div>
									<div>{product?.metaFields?.product?.description}</div>
									<div className="flex justify-between items-end gap-2 w-[fit-content]">
										<div className="flex items-center gap-2">
											<button
												className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
												onClick={() => setQuantity(Math.max(0, quantity - 1))}
											>
												−
											</button>
											<span className="px-4">{quantity}</span>
											<button
												className="px-3 py-1 bg-gray-200 rounded-lg text-lg font-bold"
												onClick={() => setQuantity(quantity + 1)}
											>
												+
											</button>
										</div>
										<p
											className="font-bold text-md md:text-xl"
											onClick={() => onSelect(product.id)}
										>
											1lb bag
										</p>
										<img
											src="./assets/Bag.png"
											alt={`Thumbnail`}
											className="w-50 h-80 object-cover cursor-pointer hover:opacity-75"
										/>
									</div>
									<button
										disabled={quantity < 1}
										className={`bg-[--beige] ${
											quantity < 1 && "empty-cart"
										} text-[--card_TextColor] px-6 py-4 font-bold rounded-lg w-full mt-2 md:mt-0`}
										onClick={() => handleCart(productId)}
									>
										{isSubmitting ? "Added" : "ADD TO CART"}
										<Toaster />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<button
				onClick={() => scroll("right")}
				className="absolute top-[20%] md:top-1/2 right-0 md:right-2 z-10 -translate-y-1/2 rounded-full bg-[--badge] text-white p-3 shadow"
			>
				<MoveRight className="w-3 h-3 md:w-6 md:h-6" />
			</button>
		</div>
	);
}
