import { useState } from "react";
import ModalPoliticas from "../sections/Politicas";

export const Nav = ({ title, logo, onScrollTo, activeSection }) => {
	// Control del modal
	const [showModal, setShowModal] = useState(false);
	const handleOpenModal = (e) => {
    	e.preventDefault();
    	setShowModal(true);
  };

	const links = [
		{ id: 'Home', label: 'Inicio' },
		{ id: 'Products', label: 'Productos' },
		{ id: 'Tienda', label: 'Tienda' },
		{ id: 'QuienesSomos', label: 'Quiénes Somos' },
		{ id: 'Form', label: 'Contacto' }
	];

	return (
		<>
			<nav className="navbar navbar-light fixed-top mb-4">
				<div className="container">
					<a className="navbar-brand" href="#"
						onClick={(e) => {
							e.preventDefault();
							onScrollTo('Home');
						}}
					><img src={logo} alt={`logo ${title}`} width="150" className="object-fit-cover" /> </a>

					<div className="d-none d-lg-block ms-auto">
						<ul className="navbar-nav d-flex justify-items-end flex-row gap-3">
							{links.map(({ id, label }) => (
								<li key={id} className="nav-item">
									<a className={`nav-link ${activeSection === id ? 'active fw-semibold' : ''}`} href="#" onClick={(e) => {
										e.preventDefault();
										onScrollTo(id);
									}}>{label}</a>
								</li>
							))}
						</ul>
					</div>

					<button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="offcanvas dvh-100 offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">{title} - Oficial</h5>
							<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav flex-column pe-3">
								{links.map(({ id, label }) => (
									<li key={id} className="nav-item">
										<a className={`nav-link ${activeSection === id ? 'active' : ''}`} href="#" onClick={(e) => {
											e.preventDefault();
											onScrollTo(id);
										}} data-bs-dismiss="offcanvas">{label}</a>
									</li>
								))}
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.preventDefault()}>
										Políticas de Privacidad
									</a>
									<ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
										<li>
											<a className="dropdown-item" href="#" onClick={handleOpenModal} data-bs-dismiss="offcanvas">
												Políticas de Privacidad
											</a>
										</li>
										<li>
											<hr className="dropdown-divider"></hr>
										</li>
										<li>
											<a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-bs-dismiss="offcanvas">
												Más sobre nosotros
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<ModalPoliticas show={showModal} onClose={() => setShowModal(false)} />				
		</>
	);
};
