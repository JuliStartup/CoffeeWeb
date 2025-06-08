function toStorefrontId(numericId) {
	const globalId = `gid://shopify/ProductVariant/${numericId}`;
	return Buffer.from(globalId).toString("base64");
}
function redirectToCheckout(variantId, quantity = 1) {
	const domain = process.env.SHOPIFY_STORE_DOMAIN;
	// Redirect user to cart URL (with the variant and quantity)
	const url = `https://${domain}/cart/${variantId}:${quantity}`;
	window.location.href = url;
}

export default async function handler(req, res) {
	let { variantId, quantity } = req.body;

	// Numeric variantId to Storefront global ID
	// if (!variantId.startsWith("Z2lkOi8")) {
	variantId = toStorefrontId(variantId);
	// }
	const response = await fetch(
		`https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-07/graphql.json`,
		{
			method: "POST",
			headers: {
				"X-Shopify-Storefront-Access-Token":
					process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
        mutation checkoutCreate($input: CheckoutCreateInput!) {
          checkoutCreate(input: $input) {
            checkout {
              id
              webUrl
            }
            userErrors {
              message
              field
            }
          }
        }
      `,
				variables: {
					input: {
						lineItems: [
							{
								variantId,
								quantity,
							},
						],
					},
				},
			}),
		},
	);

	const contentType = response.headers.get("content-type") || "";
	if (!contentType.includes("application/json")) {
		const text = await response.text();
		console.error("Non-JSON response:", text);
		return res
			.status(500)
			.json({ error: "Non-JSON response from Shopify API", details: text });
	}

	const json = await response.json();

	if (!json.data || json.data.checkoutCreate == null) {
		console.error("Shopify GraphQL error:", json);
		return res.status(500).json({
			error: json.errors || json,
			message: "Failed to create checkout",
		});
	}

	const checkoutUrl = json.data.checkoutCreate.checkout.webUrl;

	res.status(200).json({ checkoutUrl });
}
