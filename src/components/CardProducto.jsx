import { Imagen } from './Imagen';
import { Boton } from './Boton';

export const CardProducto = ({ img, title, description, price }) => {

	const handleAddToCart = () => {
		alert(`¡"${title}" añadido al carrito!`);
	};

	return (
		<>
			<div className="product-card card overflow-hidden mw-100">
				<div className="d-flex justify-content-center align-items-center" style={{ height: '18rem' }}>
					<Imagen source={img} altText={title} />
				</div>
				<div className="product-details p-3" style={{ color: '#1f2937' }}>
					<h5 className="product-title">{title}</h5>
					<p className="product-description small text-muted">{description}</p>
					<div className="price-section h2 mb-3">
						<span className="current-price">${price}</span>
					</div>
					<Boton text="Agregar al Carrito" onClick={handleAddToCart} addClass="add-to-cart-button fw-semibold" />
				</div>
			</div>
		</>
	);
};
