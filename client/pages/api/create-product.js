export default async function handler(req, res) {
	if (req.method !== "POST") return res.status(405).end();

	const { title, bodyHtml, price } = req.body;

	const response = await fetch(
		`https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2023-07/products.json`,
		{
			method: "POST",
			headers: {
				"X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_TOKEN,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				product: {
					title,
					body_html: bodyHtml,
					variants: [{ price }],
				},
			}),
		},
	);

	const data = await response.json();

	if (!response.ok) {
		return res
			.status(500)
			.json({ error: data.errors || "Failed to create product" });
	}

	res.status(200).json(data.product);
}
