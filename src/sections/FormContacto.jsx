import React, { useState } from "react";
import { Input } from "../components/Input";
import { Headline } from "../components/HeadlineH2";
import { Boton } from "../components/Boton";

export const FormContacto = React.forwardRef((props, ref) => {
	const [form, setForm] = useState({
		nombre: "",
		email: "",
	});

	const handleNombre = (valor) => {
		setForm((propiedadesIniciales) => ({
			...propiedadesIniciales,
			nombre: valor,
		}));
	};

	const handleEmail = (valor) => {
		setForm((propiedadesIniciales) => ({
			...propiedadesIniciales,
			email: valor,
		}));
	};

	const handleEnviar = () => {
		alert(`
			Nombre: ${form.nombre}
			email: ${form.email}
			Datos enviados correctamente!
			Nos contactaremos en breve.
		`);
	};

	return (
		<>
			<div className="container-form min-width mx-auto p-4 my-5">
				<section ref={ref} className="mx-auto py-3">
					<Headline text="Formulario de Contacto" />
					<Input label="Nombre" type="text" idFor="nombre" valor={form.nombre} placeholder="Jhon Doe" onChange={(valor) => handleNombre(valor)} />
					<Input label="Email" type="email" idFor="email" valor={form.email} placeholder="jhondoe@example.com" onChange={(valor) => handleEmail(valor)} />
					<Boton text={"Enviar Datos"} className="boton" onClick={handleEnviar} />
				</section>
			</div>
		</>
	);
});
