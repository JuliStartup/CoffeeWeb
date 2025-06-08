import { fetchProducts } from "@/lib/shopify";

export async function getStaticProps() {
	const products = await fetchProducts();
	return { props: { products } };
}

export default function Home({ products }) {
	console.log("products=", products);
	const [productss, setProducts] = useState([]);

	useEffect(() => {
		fetch("/api/test")
			.then((res) => res.json())
			.then((data) => {
				const items = data.products.edges.map((edge) => edge.node);
				setProducts(items);
				console.log("items=", items);
			});
	}, []);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");

	const createProduct = async () => {
		const res = await fetch("/api/create-product", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title,
				bodyHtml: "<strong>Auto-created product</strong>",
				price,
			}),
		});

		const data = await res.json();
		if (res.ok) alert(`Product created: ${data.title}`);
		else alert(`Error: ${data.error}`);
	};

	return (
		<main className="container mx-auto p-6">
			<h1 className="text-4xl font-bold mb-6">Shopify Store</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{products.map((product) => {
					const variant = product.variants.edges[0].node;
					return (
						<div key={product.id} className="border rounded-lg p-4 shadow">
							<img
								src={product.images.edges[0]?.node.url}
								alt={product.title}
								className="w-full h-48 object-cover mb-4 rounded"
							/>
							<h2 className="text-xl font-semibold">{product.title}</h2>
							<p className="text-gray-600 mb-2">
								{variant.price.amount} {variant.price.currencyCode}
							</p>
							<button
								className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
								onClick={async () => {
									const res = await fetch("/api/checkout", {
										method: "POST",
										headers: { "Content-Type": "application/json" },
										body: JSON.stringify({
											variantId: variant.id,
											quantity: 1,
										}),
									});
									const { checkoutUrl } = await res.json();
									window.location.href = checkoutUrl;
								}}
							>
								Buy Now
							</button>
						</div>
					);
				})}
			</div>
			<div className="p-4">
				<h1 className="text-2xl font-bold">Create Shopify Product</h1>
				<input
					type="text"
					placeholder="Product Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="border p-2 m-2"
				/>
				<input
					type="number"
					placeholder="Price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					className="border p-2 m-2"
				/>
				<button
					onClick={createProduct}
					className="bg-green-600 text-white p-2 rounded"
				>
					Add Product
				</button>
			</div>
		</main>
	);
}
