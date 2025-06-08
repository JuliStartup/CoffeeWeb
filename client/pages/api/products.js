export default async function handler(req, res) {
	const response = await fetch(
		`https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2023-07/products.json`,
		{
			method: "GET",
			headers: {
				"X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_TOKEN,
				"Content-Type": "application/json",
			},
		},
	);

	const data = await response.json();

	if (!response.ok) {
		return res
			.status(500)
			.json({ error: data.errors || "Failed to fetch products" });
	}

	res.status(200).json(data.products);
}
