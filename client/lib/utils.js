import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const getNumericCode = (variantId) => {
	const parts = variantId.split("/");
	const numericId = parts[parts.length - 1];
	return numericId;
};
