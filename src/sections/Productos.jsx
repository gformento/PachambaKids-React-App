import React from "react";
import { Headline } from "../components/HeadlineH2";
import { newProducts } from "../components/ProductosDatos";
import { CardProducto } from "../components/CardProducto";

export const Productos = React.forwardRef((props, ref) => {
	return (
		<section ref={ref} className="seccion-producto min-dvh-100">
			<Headline text="Nuevos Productos" />
			<div className="products-grid d-grid gap-4 justify-content-center p-4">
				{newProducts.map((product) => (
					<CardProducto key={product.id} img={product.img} title={product.title} description={product.description} price={product.price} />
				))}
			</div>
		</section>
	);
});
