export default async function handler(req, res) {
	const { id } = req.query;
	const shop = process.env.SHOPIFY_STORE_DOMAIN;
	const token = process.env.SHOPIFY_ADMIN_API_TOKEN;

	const response = await fetch(
		`https://${shop}/admin/api/2024-04/products/${id}.json`,
		{
			headers: {
				"X-Shopify-Access-Token": token,
				"Content-Type": "application/json",
			},
		},
	);

	if (!response.ok) {
		return res
			.status(response.status)
			.json({ error: "Failed to fetch products" });
	}

	const data = await response.json();
	res.status(200).json(data.product);
}
