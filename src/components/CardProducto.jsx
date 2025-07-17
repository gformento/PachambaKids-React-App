import React from 'react'; 
// Importamos los componentes de Bootstrap
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Mantendremos Imagen si tiene lógica específica, si no, podríamos usar <img> directamente
import { Imagen } from './Imagen';

export const CardProducto = ({ img, title, description, price }) => {

	const handleAddToCart = () => {
		alert(`¡"${title}" añadido al carrito!`);
	};

	return (
		<Card className="product-card overflow-hidden mw-100">
			<div className="d-flex justify-content-center align-items-center" style={{ height: '18rem', overflow: 'hidden' }}>
				<Imagen source={img} altText={title} className="card-img-top" />
			</div>
			<Card.Body className="product-details p-3" style={{ color: '#1f2937' }}>
				<Card.Title className="product-title h5">{title}</Card.Title>
				<Card.Text className="product-description small text-muted">{description}</Card.Text>
				<div className="price-section h2 mb-3">
					<span className="current-price">${price}</span>
				</div>
				<Button variant="success" onClick={handleAddToCart} className="add-to-cart-button fw-semibold w-100">
					Agregar al Carrito
				</Button>
			</Card.Body>
		</Card>
	);
};

// PropTypes para CardProducto
CardProducto.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};
// Ayuda en las herramientas de desarrollo de React
CardProducto.displayName = 'CardProducto';