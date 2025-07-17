import { useState, useCallback } from "react";
import PropTypes from 'prop-types';

// Usamos componentes de bootstrap
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';

// Componente personalizado modal
import ModalPoliticas from "../sections/Politicas";

export const NavApp = ({ title, logo, onScrollTo, activeSection }) => {

	// Control del modal
	const [showModal, setShowModal] = useState(false);
	// Control del Offcanvas
    const [showOffcanvas, setShowOffcanvas] = useState(false);

	const handleOpenModal = (e) => {
		e.preventDefault();
		setShowModal(true);
		setShowOffcanvas(false);
  	};

  	const handleCloseOffcanvas = () => setShowOffcanvas(false);
   const handleShowOffcanvas = () => setShowOffcanvas(true);

  	const handleNavLinkClick = useCallback((id) => (e) => {
    	e.preventDefault();
    	onScrollTo(id);
    	handleCloseOffcanvas();
	}, [onScrollTo]); 

	const links = [
		{ id: 'Home', label: 'Inicio' },
		{ id: 'Products', label: 'Productos' },
		{ id: 'Tienda', label: 'Tienda' },
		{ id: 'QuienesSomos', label: 'Quiénes Somos' },
		{ id: 'Form', label: 'Contacto' }
	];

	return (
		<>
			<Navbar bg="transparent" variant="light" expand="lg" sticky="top">
				<Container>
					<Navbar.Brand href="#home" onClick={handleNavLinkClick('Home')}>
						<img alt={`${title} - Oficial`} src={logo} width="150" className="d-inline-block align-top me-2"/>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowOffcanvas} />

					<Navbar.Collapse className="d-none d-lg-block">
						<Nav className="navbar-nav d-block d-lg-flex justify-items-end flex-row gap-3 ms-auto">
							{links.map(({ id, label }) => (
								<Nav.Link key={id} className={`nav-link ${activeSection === id ? 'active fw-semibold' : ''}`} href="#" onClick={handleNavLinkClick(id)}>{label}</Nav.Link>
							))}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" className="offcanvas-suave">
            <Offcanvas.Header closeButton>
               <Offcanvas.Title id="offcanvasNavbarLabel">{title} - Oficial</Offcanvas.Title>
           	</Offcanvas.Header>
            <Offcanvas.Body>
               <Nav className="navbar-nav flex-column pe-3">
                  {links.map(({ id, label }) => (
                     <Nav.Link key={id} className={`nav-link ${activeSection === id ? 'active fw-semibold' : ''}`} href="#" onClick={handleNavLinkClick(id)}>{label}</Nav.Link>
                  ))}
                  <NavDropdown title="Más" className="nav-link" id="basic-nav-dropdown-mobile">
                     <NavDropdown.Item href="#" onClick={handleOpenModal}>Políticas de Privacidad</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#" onClick={(e) => e.preventDefault()}>Más sobre nosotros</NavDropdown.Item>
                  </NavDropdown>
              	</Nav>
            </Offcanvas.Body>
         </Offcanvas>
			<ModalPoliticas show={showModal} onClose={() => setShowModal(false)} />				
		</>
	);
};
NavApp.propTypes = {
   title: PropTypes.string.isRequired,
   logo: PropTypes.string.isRequired,
   onScrollTo: PropTypes.func.isRequired,
   activeSection: PropTypes.string.isRequired
};