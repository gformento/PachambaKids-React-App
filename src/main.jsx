import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Cargamos estilos
import "./estilos/base.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Cargamos los scripts
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
)