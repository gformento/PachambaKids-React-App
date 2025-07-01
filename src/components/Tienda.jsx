/* import React from "react";
import "../estilos/Tienda.css";
import { CardProducto } from "./CardProducto";
import { allProducts } from "../components/Productos";

export const Tienda = React.forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="seccion-tienda">
        <br />
        <h2 className="h2">Nuestra Tienda</h2>
        <div className="products-grid">
          {allProducts.map((product) => (
            <CardProducto
              key={product.id}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
});
 */

import React, { useState } from "react"; // Importa useState
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
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "80%",
              maxWidth: "400px",
              fontSize: "1rem",
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
