export const getNumericCode = (variantId) => {
	const parts = variantId.split("/");
	const numericId = parts[parts.length - 1];
	return numericId;
};
