// src/components/Banner.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../estilos/Banner.css';

export const Banner = ({altBanner, imgBanner}) => {
   return (
      <section className="banner-section text-center py-5">
         <Container fluid className="position-relative overflow-hidden">
         	<Row className="justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
               <Col xs={12}>
                 	<img alt={`${altBanner} - Oficial`} src={imgBanner} className="w-50 d-inline-block"/>
                 	<div className="slogan-container position-relative">
                     <p className="banner-slogan fw-bold text-uppercase mx-auto">
                        <span className="d-block">LA ROPA QUÉ BUSCAS LA</span>
                        <span className="d-block">TENEMOS NOSOTROS!</span>
                     </p>
                  	<p className="text-uppercase">Fabrica de <strong>Remeras, Buzos, Chombas, Pantalones</strong><br/>y Mucho más!</p>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};