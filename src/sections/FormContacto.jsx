import React, { useState } from "react";
import { Input } from "../components/Input";
import { Headline } from "../components/HeadlineH2";
import { Boton } from "../components/Boton";

const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

export const FormContacto = React.forwardRef((props, ref) => {
	const [status, setStatus] = useState(null); 
	const [form, setForm] = useState({
		nombre: "",
		email: "",
	});

	const handleChange = (field, valor) => setForm(prev => ({ ...prev, [field]: valor }));
	const handleEnviar = async (e) => {
		e.preventDefault(); 
		setStatus("Enviando...");
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
				setStatus("¡Datos enviados correctamente! Nos contactaremos en breve.");
				setForm({ nombre: "", email: "" }); // resetear formulario
			} else {
				const data = await response.json();
				setStatus(data.error || "Error enviando el formulario");
			}
		} catch (error) {
			setStatus("Error de red o servidor");
		}
	};

	return (
		<>
			<div className="container-form min-width mx-auto p-4 my-5">
				<section ref={ref} className="mx-auto py-3">
					<Headline text="Formulario de Contacto" />
					<form onSubmit={handleEnviar}>
						<Input label="Nombre" type="text" idFor="nombre" valor={form.nombre} placeholder="Jhon Doe" onChange={(valor) => handleChange("nombre", valor)} />
						<Input label="Email" type="email" idFor="email" valor={form.email} placeholder="jhondoe@example.com" onChange={(valor) => handleChange("email", valor)} />
						<Boton text="Enviar Datos" className="boton" type="submit" />
					</form>
					{status && <p>{status}</p>}
				</section>
			</div>
		</>
	);
});
