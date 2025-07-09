"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(0);

	const updateQuantity = (quantity) => {
		setCart(quantity);
	};

	const value = {
		cart,
		updateQuantity,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
