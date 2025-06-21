const shop = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_ADMIN_API_TOKEN;
const storeToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const apiVersion = "2025-04";
const baseURL = `https://${shop}/admin/api/${apiVersion}`;

const graphqlBaseUrl = `https://${shop}/api/${apiVersion}/graphql.json`;

const getProducts = async (req, res) => {
	try {
		const response = await fetch(
			`${baseURL}/products.json?status=active&fields=id,title,tags`,
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
		const { products } = await response.json();
		for (const product of products) {
			const metafields = await callShopifyGraphQL(product.id);
			product.metaFields = metafields;
		}
		res.status(200).json(products);
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
async function callShopifyGraphQL(id) {
	const query = `
   {
  product(id: "gid://shopify/Product/${id}") {
    id
    title
	description
    vendor
    productType
    handle
    tags
    createdAt
	updatedAt
	totalInventory

	images(first: 10) {
      edges {
        node {
          src
          altText
        }
      }
    }
	 variants(first: 10) {
      edges {
        node {
          id
          title
          sku
          price {
            amount
            currencyCode
          }
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
    flavor:metafield(namespace: "shopify", key: "flavor") {
      type
      references(first: 10) {
        edges {
          node {
            ... on Metaobject {
              id
              type
              fields {
                key
                value
              }
            }
          }
        }
      }
    }
  }
}`;
	const res = await fetch(graphqlBaseUrl, {
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

// 	try {
// 		const query = `
// {
//   products(first: 50) {
//     edges {
//       node {
//         id
//         title
//         description
//         vendor
//         productType
//         handle
//         tags
//         createdAt
//         updatedAt
//         totalInventory
//         status

//         images(first: 10) {
//           edges {
//             node {
//               url
//               altText
//             }
//           }
//         }

//         variants(first: 10) {
//           edges {
//             node {
//               id
//               title
//               sku
//               price {
//                 amount
//                 currencyCode
//               }
//               availableForSale
//               selectedOptions {
//                 name
//                 value
//               }
//             }
//           }
//         }

//         metafield(namespace: "shopify", key: "flavor") {
//           type
//           references(first: 10) {
//             edges {
//               node {
//                 ... on Metaobject {
//                   id
//                   type
//                   fields {
//                     key
//                     value
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;
// 		const result = await fetch(graphqlBaseUrl, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				"X-Shopify-Storefront-Access-Token": storeToken,
// 			},
// 			body: JSON.stringify({
// 				query,
// 			}),
// 		});
// 		const json = await result.json();
// 		if (json.errors) {
// 			console.error(
// 				"GraphQL Errors:",
// 				json,
// 				JSON.stringify(json.errors, null, 2),
// 			);
// 			throw new Error("GraphQL query failed.");
// 		}
// 		console.log("res=", json.data);
// 		const response = await fetch(`${baseURL}/products.json`, {
// 			headers: {
// 				"X-Shopify-Access-Token": token,
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		if (!response.ok) {
// 			return res
// 				.status(response.status)
// 				.json({ error: "Failed to fetch products" });
// 		}
// 		const data = await response.json();
// 		res.status(200).json(json.data);
// 	} catch (error) {
// 		res.status(404).json({ error: error.message });
// 	}
module.exports = {
	getProducts,
	getProduct,
};
