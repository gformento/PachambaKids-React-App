import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
// Obtenemos los productos
import { newProducts } from "../components/ProductosDatos";
// Componentes personalizados
import { Headline } from "../components/HeadlineH2";
import { CardProducto } from "../components/CardProducto";

export const Productos = React.forwardRef((props, ref) => {
	return (
		<section ref={ref} className="seccion-producto min-dvh-100">
			<Headline text="Nuevos Productos" />
			<Container>
				<Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-center">
					{newProducts.map((product) => (
						<Col key={product.id} className="d-flex justify-content-center">
							<CardProducto img={product.img} title={product.title} description={product.description} price={product.price} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
});
// Opcional: PropTypes si Productos recibe alguna prop
// Productos.propTypes = {};

// Ayuda en las herramientas de desarrollo de React
Productos.displayName = 'Productos';