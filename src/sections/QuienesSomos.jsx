import React from "react";
import { Container, Row, Col, Figure } from 'react-bootstrap';

// Usando mi componente personalizado
import { Headline } from "../components/HeadlineH2";

export const QuienesSomos = React.forwardRef((props, ref) => {
	return (
		<>
			<section ref={ref} className="seccion-quienes-somos py-5">
				<Container className="text-center my-5">
					<Headline text="Quiénes Somos" />

					<Row className="justify-content-center">
						<Col md={8} lg={6}> 
							<Figure className="blockquote">
								<p className="mb-0 fs-5"> 
									Somos una empresa dedicada a la venta de ropa, con un enfoque en la calidad y el estilo. Nuestro objetivo es ofrecer prendas que combinen comodidad y moda.
								</p>
							</Figure>
						</Col>
					</Row>

				</Container>
			</section>
		</>
	);
});

// PropTypes y displayName para buenas prácticas
// QuienesSomos.propTypes = {};

QuienesSomos.displayName = 'QuienesSomos';