const shop = process.env.SHOPIFY_STORE_DOMAIN;
const adminToken = process.env.SHOPIFY_ADMIN_API_TOKEN;
const storeToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const apiVersion = "2025-04";

const adminBaseUrl = `https://${shop}/admin/api/${apiVersion}`;
const storeBaseUrl = `https://${shop}/api/${apiVersion}/graphql.json`;

const getProducts = async (req, res) => {
	try {
		const response = await fetch(
			`${adminBaseUrl}/products.json?status=active&fields=id,title,tags`,
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
async function callShopifyGraphQL(productId) {
	const query = `
   {
  product(id: "gid://shopify/Product/${productId}") {
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
          sellingPlanAllocations(first: 10) {
            edges {
              node {
                priceAdjustments {
                  price {
                    amount
                    currencyCode
                  }
                }
                sellingPlan {
                  id
                  name
                  options {
                    name
                    value
                  }
                }
              }
            }
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

async function createCartWithSubscription(variantId, quantity, sellingPlanId) {
	const query = `mutation CreateCartWithSubscription {
  cartCreate(
    input: {
      lines: [
        {
              quantity: ${quantity}
              merchandiseId: "${variantId}"
              sellingPlanId: "${sellingPlanId}"
        }
      ]
    }
  ) {
    cart {
      id
      checkoutUrl
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            sellingPlanAllocation {
              sellingPlan {
                id
                name
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
              }
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}`;
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
	return json.data.cartCreate;
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

const addSellingPlanInfo = async (req, res) => {
	const { id, quantity, selling_plan } = req.body;

	try {
		const data = await createCartWithSubscription(id, quantity, selling_plan);
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: "Internal server error" });
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
	addSellingPlanInfo,
};
