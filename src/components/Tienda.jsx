import React from "react";
import '../estilos/Tienda.css'
import { CardProducto } from "./CardProducto";
import Remera1 from "../Imagenes/remera1.jpg";
import RemeraClasica from "../Imagenes/remera.jpg";
import Remera2 from "../Imagenes/remera2.jpg";
import Remera3 from "../Imagenes/remera3.jpg";

export const Tienda = React.forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="seccion-tienda">
        <br />
        <h2 className="h2">Nuestra Tienda</h2>
        <div className="products-grid">
          <CardProducto
            img={RemeraClasica}
            title={"Remera Clasica"}
            description={"100% algodon"}
            price={"100"}
          />

          <CardProducto
          img={RemeraClasica}
          title={"Remera Clasica"}
          description={"100% algodon"}
          price={"100"}
           />
           
          <CardProducto
            img={Remera1}
            title={"Remera unica"}
            description={"100% algodon"}
            price={"100"}
          />

          <CardProducto
            img={Remera2}
            title={"Remera 2"}
            description={"100% algodon"}
            price={"300"}
          />

          <CardProducto
            img={Remera3}
            title={"Remera 3"}
            description={"100% algodon"}
            price={"200"}
          />
        </div>
      </section>
    </>
  );
});
