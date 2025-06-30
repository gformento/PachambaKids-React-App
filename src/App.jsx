import "./estilos/App.css";
import "./estilos/index.css";
import "./estilos/CardProducto.css";
import "./estilos/Boton.css";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CardProducto } from "./components/CardProducto";
import { Nav } from "./components/Nav";
import Remera1 from "./Imagenes/remera1.jpg";
import RemeraClasica from "./Imagenes/remera.jpg";
import Remera2 from "./Imagenes/remera2.jpg";
import Remera3 from "./Imagenes/remera3.jpg";
import logo from "./Imagenes/logo.png";
import banner from "./Imagenes/banner.jpg";
import { Footer } from "./components/Footer";
import { Boton } from "./components/Boton";
import { Banner } from "./components/Banner";
import { Tienda } from "./components/Tienda";
import { QuienesSomos } from "./components/QuienesSomos";
import { FormContacto } from "./components/FormContacto";
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

      <Boton text={"Tienda"} onClick={handleScrollToTienda} />
      <Boton text={"Quienes Somos"} onClick={handleScrollToQuienesSomos} />
      <Boton text={"Formulario Contacto"} onClick={handleScrollToForm} />

      <br />
      <Nav logo={logo} />
      <h2 className="h2">Nuevos Productos:</h2>
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
          description={"100% friza"}
          price={"400"}
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

      <Tienda ref={tiendaRef} />
      <br />
      <QuienesSomos ref={QuienesSomosRef} />
      <FormContacto ref={FormRef} />
      <Footer />
    </>
  );
}

export default App;
