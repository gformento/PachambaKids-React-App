import "./estilos/App.css";
import "./estilos/index.css";
import "./estilos/CardProducto.css";
import "./estilos/Boton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import logo from "./Imagenes/logo.png";
import banner from "./Imagenes/banner.jpg";

import { useRef } from "react";

import { CardProducto } from "./components/CardProducto";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Tienda } from "./components/Tienda";
import { QuienesSomos } from "./components/QuienesSomos";
import { FormContacto } from "./components/FormContacto";
import { newProducts } from "./components/Productos";

function App() {
  const newProductsRef = useRef(null);
  const tiendaRef = useRef(null);
  const QuienesSomosRef = useRef(null);
  const FormRef = useRef(null);

  // Función para desplazarse al inicio de la página
  const handleScrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Función para desplazarse a la sección de Tienda
  const handleScrollToTienda = () => {
    if (tiendaRef.current) {
      tiendaRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Función para desplazarse a la sección "Nuevos Productos"
  const handleScrollToProducts = () => {
    if (newProductsRef.current) {
      newProductsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Función para desplazarse a la sección Quiénes Somos
  const handleScrollToQuienesSomos = () => {
    if (QuienesSomosRef.current) {
      QuienesSomosRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Función para desplazarse a la sección de Formulario de Contacto
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
      <Nav
        logo={logo}
        onScrollToHome={handleScrollToHome}
        onScrollToTienda={handleScrollToTienda}
        onScrollToProducts={handleScrollToProducts}
        onScrollToQuienesSomos={handleScrollToQuienesSomos}
        onScrollToForm={handleScrollToForm}
      />
      <br />
      <h2 className="h2" ref={newProductsRef}>
        Nuevos Productos:
      </h2>
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
