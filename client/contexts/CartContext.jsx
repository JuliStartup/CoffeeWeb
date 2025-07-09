"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(0);
	const [checkoutUrl, setCheckoutUrl] = useState(null);

	useEffect(() => {
		const savedCheckoutUrl = localStorage.getItem("shopify_checkout_url");
		if (savedCheckoutUrl) setCheckoutUrl(savedCheckoutUrl);
	}, []);

	const updateQuantity = (quantity) => {
		setCart(quantity);
	};

	const updateCart = (url) => {
		setCheckoutUrl(url);
	};

	const value = {
		cart,
		checkoutUrl,
		updateCart,
		updateQuantity,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
