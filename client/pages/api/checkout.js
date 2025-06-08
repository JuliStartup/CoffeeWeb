import { shopifyFetch } from "@/lib/shopify";

const CREATE_CHECKOUT = `
mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
  checkoutCreate(input: { lineItems: $lineItems }) {
    checkout {
      webUrl
    }
  }
}`;

export default async function handler(req, res) {
	const { variantId, quantity } = req.body;
	const data = await shopifyFetch({
		query: CREATE_CHECKOUT,
		variables: { lineItems: [{ variantId, quantity }] },
	});
	res.status(200).json({ checkoutUrl: data.checkoutCreate.checkout.webUrl });
}
