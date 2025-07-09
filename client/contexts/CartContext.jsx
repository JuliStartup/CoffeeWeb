"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(0);
	const [cartID, setCartID] = useState(null);
	const [checkoutUrl, setCheckoutUrl] = useState(null);

	const updateQuantity = (quantity) => {
		setCart(quantity);
	};

	const updateCart = (id, url) => {
		setCartID(id);
		setCheckoutUrl(url);
	};

	const value = {
		cart,
		cartID,
		checkoutUrl,
		updateCart,
		updateQuantity,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
