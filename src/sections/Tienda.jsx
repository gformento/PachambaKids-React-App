import React, { useState } from "react";

import { CardProducto } from "../components/CardProducto";
import { allProducts } from "../components/ProductosDatos";
import { Headline } from "../components/HeadlineH2";
import { Input } from "../components/Input";

export const Tienda = React.forwardRef((props, ref) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredProducts = allProducts.filter((product) => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		const lowerCaseTitle = product.title.toLowerCase();
		const lowerCaseDescription = product.description.toLowerCase();

		return (
			lowerCaseTitle.includes(lowerCaseSearchTerm) ||
			lowerCaseDescription.includes(lowerCaseSearchTerm)
		);
	});

	return (
		<>
			<section ref={ref} className="seccion-tienda">
				<Headline text="Nuestra Tienda" />
				<div className="search-bar-container mx-auto text-center mb-3 min-width">
					<Input type="search" placeholder="Buscar productos..." onChange={handleSearchChange} />
				</div>
				
				{filteredProducts.length > 0 ? (
					<div className="products-grid d-grid gap-4 justify-content-center p-4">
						{filteredProducts.map((product) => (
							<CardProducto key={product.id} img={product.img} title={product.title} description={product.description} price={product.price} />
						))}
					</div>
				) : (
					<div className="py-4 my-5 text-muted fw-bold h3 text-center container">
						No se encontraron productos que coincidan con tu búsqueda.
					</div>
				)}
			</section>
		</>
	);
});
