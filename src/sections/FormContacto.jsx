import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';

// Usando mi componente personalizado
import { Headline } from "../components/HeadlineH2";

// Usamos componentes de bootstrap
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

// Obteniendo endpoint desde .env 
// Cambiamos la forma de llamarlo
const { 
	VITE_FORM_ENDPOINT: endpoint 
} = import.meta.env;

export const FormContacto = React.forwardRef((props, ref) => {
	const [form, setForm] = useState({
		nombre: "",
		email: "",
	});

	// Estado para controlar la visibilidad y el tipo de la alerta
	const [status, setStatus] = useState({
		loading: false,
		alert: {
			show: false,
			variant: 'success',
			message: ''
		}
	});

	const handleChange = useCallback((field, valor) => {
		setForm(prev => ({ ...prev, [field]: valor }));
	}, []);

	// Función para mostrar alertas de forma centralizada
	const showAlert = useCallback((variant, message, duration = 5000) => {
		setStatus(prev => ({ ...prev, alert: { show: true, variant, message } }));
		// Ocultar la alerta automáticamente después de un tiempo
		setTimeout(() => {
			setStatus(prev => ({ ...prev, alert: { ...prev.alert, show: false } }));
		}, duration);
	}, []); // Dependencias vacías

	const handleEnviar = async (e) => {
		e.preventDefault(); 

		// 1. Validaciones básicas antes de enviar
		if (!form.nombre.trim() || !form.email.trim()) {
			showAlert('warning', 'Por favor, completa todos los campos.');
			return; // Detenemos la ejecución si hay campos vacíos
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			showAlert('warning', 'Por favor, ingresa un formato de email válido.');
			return; // Detenemos la ejecución si el email no es válido
		}

		// Activamos el estado de carga y mostramos alerta de envío
		setStatus(prev => ({ ...prev, loading: true }));
		showAlert('info', 'Enviando tus datos...', 0);

		try {
			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					nombre: form.nombre,
					email: form.email,
				}),
			});

			if (response.ok) {
				showAlert('success', '¡Formulario enviado correctamente!');
				setForm({ nombre: "", email: "" });
			} else {
				const data = await response.json();
				showAlert('danger', data.error || "Error al enviar el formulario. Inténtalo de nuevo.");
			}
		} catch (error) {
			// Con el console para saber si hay error
			console.error("Error en la petición:", error);
			showAlert('danger', "Error de conexión. Por favor, verifica tu internet o inténtalo más tarde.");
		} finally {
			setStatus(prev => ({ ...prev, loading: false }));
		}
	};

	return (
		<>
			<div className="container-form min-width mx-auto p-4 my-5">
				<section ref={ref} className="mx-auto py-3">
					<Headline text="Formulario de Contacto" />
					<Form onSubmit={handleEnviar}>

						{status.alert.show && (
							<Alert variant={status.alert.variant} onClose={() => setStatus(prev => ({ ...prev, alert: { ...prev.alert, show: false } }))} dismissible>{status.alert.message}</Alert>
						)}

						<Form.Group className="mb-3" controlId="formNombre">
							<Form.Label>Nombre</Form.Label>
							<Form.Control type="text" placeholder="Jhon Doe" value={form.nombre} onChange={(e) => handleChange("nombre", e.target.value)}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="jhondoe@example.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)}/>
						</Form.Group>
						<Button variant="success" type="submit" disabled={status.loading}>
							{status.loading ? (
								<>
									<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>{' '}Enviando...
								</>
							) : ('Enviar Datos')}
						</Button>
					</Form>
				</section>
			</div>
		</>
	);
});

// Validación para FormContacto
FormContacto.propTypes = {
	nombre: PropTypes.string,
	email: PropTypes.string
};
// Ayuda en las herramientas de desarrollo de React
FormContacto.displayName = 'FormContacto'; 