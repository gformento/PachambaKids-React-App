import "./estilos/App.css";
import "./estilos/index.css";
import "./estilos/CardProducto.css";
import "./estilos/Boton.css";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CardProducto } from "./components/CardProducto";
import { Nav } from "./components/Nav";
import logo from "./Imagenes/logo.png";
import banner from "./Imagenes/banner.jpg";
import { Footer } from "./components/Footer";
import { Boton } from "./components/Boton";
import { Banner } from "./components/Banner";
import { Tienda } from "./components/Tienda";
import { QuienesSomos } from "./components/QuienesSomos";
import { FormContacto } from "./components/FormContacto";

import { newProducts } from "./components/Productos";

function App() {
  const tiendaRef = useRef(null);
  const QuienesSomosRef = useRef(null);
  const FormRef = useRef(null);

  const handleScrollToTienda = () => {
    if (tiendaRef.current) {
      tiendaRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleScrollToQuienesSomos = () => {
    if (QuienesSomosRef.current) {
      QuienesSomosRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleScrollToForm = () => {
    if (FormRef.current) {
      FormRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <Banner imgBanner={banner} />
      <br />

      <div className="container-button">
        <Boton text={"Tienda"} onClick={handleScrollToTienda} />
        <Boton text={"Quienes Somos"} onClick={handleScrollToQuienesSomos} />
        <Boton text={"Formulario Contacto"} onClick={handleScrollToForm} />
      </div>

      <br />
      <Nav logo={logo} />
      <h2 className="h2">Nuevos Productos:</h2>
      <div className="products-grid">
        {newProducts.map((product) => (
          <CardProducto
            key={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      <Tienda ref={tiendaRef} />
      <br />
      <QuienesSomos ref={QuienesSomosRef} />
      <FormContacto ref={FormRef} />
      <Footer />
    </>
  );
}

export default App;
