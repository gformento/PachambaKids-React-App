import React from "react";
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
