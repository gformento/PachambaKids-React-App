import React, { useRef, useState, useEffect } from "react";

import { Productos } from "./sections/Productos";
import { Tienda } from "./sections/Tienda";
import { QuienesSomos } from "./sections/QuienesSomos";
import { FormContacto } from "./sections/FormContacto";
import { Footer } from "./sections/Footer";

import { NavApp } from "./components/Nav";
import { Banner } from "./components/Banner";
import { CardProducto } from "./components/CardProducto";
import { Headline } from "./components/HeadlineH2";

import logo from "./Imagenes/tit.webp";
import banner from "./Imagenes/banner.webp";

const { VITE_SITE_TITLE } = import.meta.env;
const titleSite = VITE_SITE_TITLE || "Pachamba Kids";

function App() {
	// Cambiando el titulo
	useEffect(() => {
		document.title = titleSite;
	}, []);
	//
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
			<NavApp title={titleSite} logo={logo} onScrollTo={handleScrollTo} activeSection={activeSection} />
			<Banner altBanner={titleSite} imgBanner={logo} />
			<Productos ref={productosRef} />
			<Tienda ref={tiendaRef} />
			<QuienesSomos ref={quienesSomosRef} />
			<FormContacto ref={formularioRef} />
			<Footer />
	 	</>
  	);
}

export default App;