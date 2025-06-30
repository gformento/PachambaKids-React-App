export const CardProducto = ({ img, title, description, price }) => {
  const handleAddToCart = () => {
    alert(`¡"${title}" añadido al carrito!`);
  };

  return (
    <>
      <div className="product-card">
        <div className="image-container">
          <img
            className="product-image"
            src={img}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/300x300/e0e0e0/555555?text=Imagen+no+disponible";
            }}
          />
        </div>

        <div className="product-details">
          <h3 className="product-title">{title}</h3>

          <p className="product-description">{description}</p>

          <div className="price-section">
            <span className="current-price">${price}</span>
          </div>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
