const subscriptionQuery = (variantId, quantity, sellingPlanId) => {
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
	return query;
};

const oneTimeQuery = (variantId, quantity) => {
	const query = `mutation CreateCartWithSubscription {
  cartCreate(
    input: {
      lines: [
        {
              quantity: ${quantity}
              merchandiseId: "${variantId}"
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
	return query;
};

const productQuery = (productId) => {
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
	return query;
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
	subscriptionQuery,
	oneTimeQuery,
	productQuery,
};
