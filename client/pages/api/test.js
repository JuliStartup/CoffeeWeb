import { getProducts } from "@/lib/shopify";

export default async function handler(req, res) {
	const data = await getProducts();
	res.status(200).json(data);
}
