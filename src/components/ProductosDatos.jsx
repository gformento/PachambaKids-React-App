import Remera1 from "../Imagenes/remera1.webp";
import RemeraClasica from "../Imagenes/remera.webp";
import Remera2 from "../Imagenes/remera2.webp";

export const products = [
	{
		id: "p1",
		img: RemeraClasica,
		title: "Remera Clásica Algodón",
		description:
			"100% algodón peinado, suave y transpirable. Ideal para el uso diario.",
		price: "100",
		disponible: true,
	},
	{
		id: "p2",
		img: RemeraClasica,
		title: "Remera Clásica Friza",
		description:
			"100% friza, perfecta para climas frescos. Ofrece gran comodidad y calidez.",
		price: "400",
		disponible: true,
	},
	{
		id: "p3",
		img: Remera1,
		title: "Remera Única Diseño",
		description:
			"Diseño exclusivo y moderno, 100% algodón premium. Destaca con estilo.",
		price: "150",
		disponible: true,
	},
	{
		id: "p4",
		img: Remera2,
		title: "Remera Estampada Moderna",
		description:
			"Estampado de alta calidad y durabilidad, 100% algodón. Un toque de personalidad.",
		price: "300",
		disponible: true,
	},
	{
		id: "p5",
		img: Remera1,
		title: "Remera Deportiva Performance",
		description:
			"Tejido técnico que absorbe la humedad, ideal para actividad física intensa.",
		price: "250",
		disponible: true,
	},
	{
		id: "p6",
		img: Remera2,
		title: "Remera Casual Rayas",
		description:
			"Diseño clásico de rayas, mezcla de algodón y poliéster para mayor confort.",
		price: "200",
		disponible: false, //Cambios aca
	},
	{
		id: "p7",
		img: RemeraClasica,
		title: "Remera Básica Blanca",
		description: "Un esencial en cualquier guardarropa, versátil y cómoda.",
		price: "80",
		disponible: true,
	},
	{
		id: "p9",
		img: Remera2,
		title: "Campera Rompevientos",
		description:
			"Ligera y resistente al viento, ideal para actividades al aire libre.",
		price: "750",
		disponible: false, //Cambios aca
	},
];

// Para la sección "Nuevos Productos", filtramos por disponible y tomamos los primeros 4
export const newProducts = products.filter((p) => p.disponible).slice(0, 4);

//Mostramos todos los productos disponibles
export const allProducts = products.filter((p) => p.disponible);
