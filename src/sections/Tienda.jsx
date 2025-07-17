import React, { useState, useCallback } from "react";
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
// Obtenemos los productos
import { allProducts } from "../components/ProductosDatos";
// Componentes personalizados
import { CardProducto } from "../components/CardProducto";
import { Headline } from "../components/HeadlineH2";
import { Input } from "../components/Input";

export const Tienda = React.forwardRef((props, ref) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = useCallback((event) => {
   	setSearchTerm(event.target.value);
	}, []);

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
				<Container>
					<div className="search-bar-container mx-auto text-center mb-3 min-width">
						<Form.Control type="search" placeholder="Buscar productos..." value={searchTerm} onChange={handleSearchChange} className="mx-auto"  style={{ maxWidth: '400px' }} />
					</div>
					
					{filteredProducts.length > 0 ? (
						<Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-center">
							{filteredProducts.map((product) => (
								<Col key={product.id} className="d-flex justify-content-center">
									<CardProducto img={product.img} title={product.title} description={product.description} price={product.price} />
								</Col>
							))}
						</Row>
					) : (
						<Alert variant="info" className="py-4 my-5 text-center">
				        	<h3 className="fw-bold">No se encontraron productos que coincidan con tu búsqueda.</h3>
				        	<p>Intenta con otra palabra clave o revisa la ortografía.</p>
				    	</Alert>
					)}
				</Container>
			</section>
		</>
	);
});

// Opcional: PropTypes si Tienda recibe alguna prop
// Tienda.propTypes = {};

// Ayuda en las herramientas de desarrollo de React
Tienda.displayName = 'Tienda';