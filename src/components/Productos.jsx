import Remera1 from "../Imagenes/remera1.jpg";
import RemeraClasica from "../Imagenes/remera.jpg";
import Remera2 from "../Imagenes/remera2.jpg";

export const products = [
  {
    id: "p1",
    img: RemeraClasica,
    title: "Remera Clásica Algodón",
    description:
      "100% algodón peinado, suave y transpirable. Ideal para el uso diario.",
    price: "100",
  },
  {
    id: "p2",
    img: RemeraClasica,
    title: "Remera Clásica Friza",
    description:
      "100% friza, perfecta para climas frescos. Ofrece gran comodidad y calidez.",
    price: "400",
  },
  {
    id: "p3",
    img: Remera1,
    title: "Remera Única Diseño",
    description:
      "Diseño exclusivo y moderno, 100% algodón premium. Destaca con estilo.",
    price: "150",
  },
  {
    id: "p4",
    img: Remera2,
    title: "Remera Estampada Moderna",
    description:
      "Estampado de alta calidad y durabilidad, 100% algodón. Un toque de personalidad.",
    price: "300",
  },
  {
    id: "p5",
    img: Remera1,
    title: "Remera Deportiva Performance",
    description:
      "Tejido técnico que absorbe la humedad, ideal para actividad física intensa.",
    price: "250",
  },
];

export const newProducts = products.slice(0, 3);

export const allProducts = products;
