import { useRef, useState } from "react";

import { Productos } from "./sections/Productos";
import { Tienda } from "./sections/Tienda";
import { QuienesSomos } from "./sections/QuienesSomos";
import { FormContacto } from "./sections/FormContacto";
import { Footer } from "./sections/Footer";

import { Nav } from "./components/Nav";
import { Banner } from "./components/Banner";
import { CardProducto } from "./components/CardProducto";
import { Headline } from "./components/HeadlineH2";

import logo from "./Imagenes/tit.webp";
import banner from "./Imagenes/banner.webp";

const titleSite = 'PachambaKids';

function App() {
	const [activeSection] = useState('Home');
	//
	const productosRef = useRef(null);
	const tiendaRef = useRef(null);
	const quienesSomosRef = useRef(null);
	const formularioRef = useRef(null);
	//
	const handles = {
		'Tienda': tiendaRef, 
		'Products': productosRef, 
		'QuienesSomos': quienesSomosRef, 
		'Form': formularioRef
	};

	// Forma más fácil de reducir lo demás ya que es redundante
	const handleScrollTo = (section) => {
		if (section === 'Home') {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}
		const ref = handles[section];
		if (ref?.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

	return (
		<>
			<Banner altBanner={titleSite} imgBanner={banner} />
			<Nav title={titleSite} logo={logo} onScrollTo={handleScrollTo} activeSection={activeSection} />
			<Productos ref={productosRef} />
			<Tienda ref={tiendaRef} />
			<QuienesSomos ref={quienesSomosRef} />
			<FormContacto ref={formularioRef} />
			<Footer />
	 	</>
  	);
}

export default App;