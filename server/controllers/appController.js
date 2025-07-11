const {
	subscriptionQuery,
	oneTimeQuery,
	productQuery,
	lineItemToExistingCartQuery,
} = require("./queries");

const shop = process.env.SHOPIFY_STORE_DOMAIN;
const adminToken = process.env.SHOPIFY_ADMIN_API_TOKEN;
const storeToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const apiVersion = "2025-04";

const adminBaseUrl = `https://${shop}/admin/api/${apiVersion}`;
const storeBaseUrl = `https://${shop}/api/${apiVersion}/graphql.json`;

const getProducts = async (req, res) => {
	try {
		const response = await fetch(
			`${adminBaseUrl}/products.json?status=active&fields=id,title,tags,variants`,
			{
				headers: {
					"X-Shopify-Access-Token": adminToken,
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			return res
				.status(response.status)
				.json({ error: "Failed to fetch products" });
		}
		const { products } = await response.json();
		for (const product of products) {
			const metafields = await callShopifyGraphQL(product.id);
			product.metaFields = metafields;
			product.isInStock = product.variants.some(
				(v) => v.inventory_quantity > 0,
			);
		}
		const featured = products?.filter(
			(product) => product?.tags === "Featured",
		);
		res.status(200).json({ all: products, featured });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

/**
 * Calls the Shopify Admin GraphQL API
 * @param {string} query - GraphQL query string
 * @param {Object} variables - Optional GraphQL variables
 * @returns {Promise<Object>} - API response JSON
 */
async function callShopifyGraphQL(productId) {
	const query = productQuery(productId);
	const res = await fetch(storeBaseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Shopify-Storefront-Access-Token": storeToken,
		},
		body: JSON.stringify({ query }),
	});

	const json = await res.json();

	if (json.errors) {
		console.error(
			"GraphQL Errors:",
			json,
			JSON.stringify(json.errors, null, 2),
		);
		throw new Error("GraphQL query failed.");
	}

	return json.data;
}

async function createCart({ variantId, quantity, sellingPlanId }) {
	const query = sellingPlanId
		? subscriptionQuery(variantId, quantity, sellingPlanId)
		: oneTimeQuery(variantId, quantity);

	const res = await fetch(storeBaseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Shopify-Storefront-Access-Token": storeToken,
		},
		body: JSON.stringify({
			query,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(
			"GraphQL Errors:",
			json,
			JSON.stringify(json.errors, null, 2),
		);
		throw new Error("GraphQL query failed.");
	}
	return json.data.cartCreate;
}

async function updateExistingCart({
	variantId,
	quantity,
	sellingPlanId,
	cartId,
}) {
	const query = lineItemToExistingCartQuery(
		cartId,
		variantId,
		quantity,
		sellingPlanId,
	);
	const res = await fetch(storeBaseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Shopify-Storefront-Access-Token": storeToken,
		},
		body: JSON.stringify({
			query,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(
			"GraphQL Errors:",
			json,
			JSON.stringify(json.errors, null, 2),
		);
		throw new Error("GraphQL query failed.");
	}
	return json.data;
}

const getProduct = async (req, res) => {
	const { id } = req.params;
	try {
		// const allMetaFields = await fetch(
		// 	`${baseURL}/products/${id}/metafields.json`,
		// 	{
		// 		headers: {
		// 			"X-Shopify-Access-Token": token,
		// 			"Content-Type": "application/json",
		// 		},
		// 	},
		// );
		// const responseMetaKeys = await allMetaFields.json();
		// console.log(
		// 	"allMetaFields=",
		// 	responseMetaKeys?.metafields?.map((v) => v.key),
		// );

		const responseMeta = await callShopifyGraphQL(id);
		const result = responseMeta.product;
		const flavor =
			result.flavor?.references?.edges.map((edge) => {
				const metaFields = edge.node.fields || [];
				const flat = metaFields.reduce((acc, field) => {
					acc[field.key] = field.value;
					return acc;
				}, {});
				return flat.label;
			}) || [];

		res.status(200).json({ product: result, flavor });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const addCart = async (req, res) => {
	const { variantId, quantity } = req.body;
	try {
		const data = await createCart({
			variantId,
			quantity,
		});
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: "Internal server error" });
	}
};

const updateCart = async (req, res) => {
	const { cartId, variantId, quantity, selling_plan } = req.body;

	try {
		const data = await updateExistingCart({
			variantId,
			quantity,
			cartId,
			sellingPlanId: selling_plan,
		});
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: "Internal server error" });
	}
};

const addSellingPlanInfo = async (req, res) => {
	const { id, quantity, selling_plan } = req.body;

	try {
		const data = await createCart({
			variantId: id,
			quantity,
			sellingPlanId: selling_plan,
		});
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: "Internal server error" });
	}
};
module.exports = {
	getProducts,
	getProduct,
	addSellingPlanInfo,
	addCart,
	updateCart,
};
