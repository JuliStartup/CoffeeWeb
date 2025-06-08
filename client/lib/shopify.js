const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const SHOPIFY_API_URL = `https://${domain}/api/2023-07/graphql.json`;

export async function shopifyFetch({ query, variables = {} }) {
	const res = await fetch(SHOPIFY_API_URL, {
		method: "POST",
		headers: {
			"X-Shopify-Storefront-Access-Token": storefrontAccessToken,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});

	const json = await res.json();
	if (json.errors) throw new Error(JSON.stringify(json.errors));
	return json.data;
}

export async function getProducts() {
	const query = `
    {
      products(first: 8) {
        edges {
          node {
            id
            title
            description
            handle
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
	return shopifyFetch({ query });
}
