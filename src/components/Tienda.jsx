import React, { useState } from "react";
import "../estilos/Tienda.css";
import { CardProducto } from "./CardProducto";
import { allProducts } from "../components/Productos";
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
        <br />
        <h2 className="h2">Nuestra Tienda</h2>

        <div
          className="search-bar-container"
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              width: "80%",
              maxWidth: "400px",
              fontSize: "1rem",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              transition: "all 0.2s ease-in-out",
              outline: "none",
              ":focus": {
                borderColor: "#4f46e5",
                boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)",
              },
            }}
          />
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <CardProducto
                key={product.id}
                img={product.img}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%", color: "#666" }}>
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          )}
        </div>
      </section>
    </>
  );
});
