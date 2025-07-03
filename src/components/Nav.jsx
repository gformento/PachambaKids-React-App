import "../estilos/Nav.css";

export const Nav = ({
  logo,
  onScrollToHome,
  onScrollToTienda,
  onScrollToProducts,
  onScrollToQuienesSomos,
  onScrollToForm,
}) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onScrollToHome();
            }}
          >
            <img src={logo} alt="logo" width="200" height="70" />{" "}
          </a>

          <div className="d-none d-lg-block ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToHome();
                  }}
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToTienda();
                  }}
                >
                  Tienda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToProducts();
                  }}
                >
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToQuienesSomos();
                  }}
                >
                  Quienes Somos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToForm();
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                PachambaKids - Oficial
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-column pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollToHome();
                    }}
                    data-bs-dismiss="offcanvas"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollToTienda();
                    }}
                    data-bs-dismiss="offcanvas"
                  >
                    Tienda
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollToProducts();
                    }}
                    data-bs-dismiss="offcanvas"
                  >
                    Productos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollToQuienesSomos();
                    }}
                    data-bs-dismiss="offcanvas"
                  >
                    Quienes Somos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollToForm();
                    }}
                    data-bs-dismiss="offcanvas"
                  >
                    Contacto
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e) => e.preventDefault()}
                  >
                    Políticas de Privacidad
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        data-bs-dismiss="offcanvas"
                      >
                        Políticas de Privacidad
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        data-bs-dismiss="offcanvas"
                      >
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
    </>
  );
};
