"use client";

export default function ProductList({ onSelect, products }) {
	return (
		<div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-4 -mx-2.5">
			{products?.map((product) => {
				// const roastHandle = product.handle.toLowerCase();
				// let roastLevel = 0;
				// if (roastHandle.includes("light")) roastLevel = 1;
				// else if (roastHandle.includes("medium")) roastLevel = 2;
				// else if (roastHandle.includes("dark")) roastLevel = 3;

				const flavors =
					product.metaFields?.product.flavor?.references?.edges.map(
						({ node }) => {
							const metaFields = node.fields || [];
							const flat = metaFields.reduce((acc, field) => {
								acc[field.key] = field.value;
								return acc;
							}, {});
							return flat.label;
						},
					) || [];
				const badgeTitle = product?.isInStock
					? product?.tags?.toUpperCase() || "SALE"
					: "OUT OF STOCK";
				const badgeColor =
					badgeTitle === "SALE"
						? "[--featured]"
						: badgeTitle === "OUT OF STOCK"
						? "[--beige]"
						: "[--badge]";
				const badgeTextColor = badgeTitle === "SALE" ? "white" : "black";
				return (
					<div
						key={product.id}
						className="flex flex-col w-full bg-gray-200 border border-gray-200 rounded-lg shadow"
					>
						<div
							className="relative block h-full cursor-pointer"
							onClick={() =>
								badgeTitle !== "OUT OF STOCK" && onSelect(product.id)
							}
						>
							<span
								className={`absolute bg-${badgeColor} flex items-center justify-center text-${badgeTextColor} right-3 px-6 py-1 rounded shadow-md text-center -top-4`}
							>
								{badgeTitle}
							</span>

							<img
								src={product.metaFields.product.images?.edges[0]?.node.src}
								alt={
									product.metaFields.product.images?.edges[0]?.node?.altText ||
									""
								}
								className="w-full object-cover rounded-md mx-auto rounded-t-lg h-80"
							/>
						</div>
						<div className="flex flex-col h-full px-5 py-4 bg-white rounded-b-lg grow">
							<div className="h-full grow">
								<h3 className="mt-4 text-2xl font-medium tracking-tight text-center text-gray-900">
									{product.title}
								</h3>
							</div>
							<div className="flex justify-around px-[3em]">
								{flavors?.map((_) => (
									<span className="text-[#6f6b38]" key={_}>
										{_}
									</span>
								))}
							</div>
							<div className="flex flex-col h-full">
								<div className="pt-4 md:pt-0 text-center mt-2 mb-4">
									<span className="text-xl font-bold text-gray-700 ">
										$
										{
											product.metaFields.product.variants.edges[0].node.price
												.amount
										}
										{/* {
											product.metaFields.product.variants.edges[0].node.price
												.currencyCode
										} */}
									</span>
								</div>
								<div
									className="flex items-center justify-center us-max:flex-col 2xl:flex-row lg:flex-col"
									onClick={() =>
										badgeTitle !== "OUT OF STOCK" && onSelect(product.id)
									}
								>
									<div className="py-2 mb-4 btn-buy text-white md:mb-0 text-lg sm-only:px-1.5 cursor-pointer">
										Buy Now
									</div>
								</div>
							</div>
						</div>
						{/* Roast Bars */}
						{/* <div className="flex pb-2 px-4 justify-end space-x-1">
								<strong>{product.handle}</strong>
								{[...Array(5)].map((_, i) => (
									<div
										key={i}
										className={`w-2 h-5 rounded ${
											i < roastLevel ? "bg-green-500" : "bg-gray-300"
										}`}
									/>
								))}
							</div> */}
						{/* </div> */}
					</div>
				);
			})}
		</div>
	);
}
