import React from "react";
import { Headline } from "../components/HeadlineH2";
export const QuienesSomos = React.forwardRef((props, ref) => {
	return (
		<>
			<section ref={ref} className="container-quienes-somos min-width mx-auto d-flex justify-content-center align-items-center flex-column" style={{ minHeight: "50dvh" }}>
					<Headline text="Quienes Somos" />
					<blockquote className="blockquote text-center">
						<p>Somos una empresa dedicada a la venta de ropa, con un enfoque
						en la calidad y el estilo. Nuestro objetivo es ofrecer prendas que
						combinen comodidad y moda.{" "}</p>
					</blockquote>
			</section>
		</>
	);
});
