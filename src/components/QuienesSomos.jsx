import React from "react";
import "../estilos/QuienesSomos.css";
export const QuienesSomos = React.forwardRef((props, ref) => {
  return (
    <>
    <div className="container-quienes-somos">
      <section ref={ref}>
        <br />
        <h2 className="h2"> Quienes Somos</h2>
        <p>
          Somos una empresa dedicada a la venta de ropa, con un enfoque
          en la calidad y el estilo. Nuestro objetivo es ofrecer prendas que
          combinen comodidad y moda.{" "}
        </p>
      </section>
      </div>
    </>
  );
});
