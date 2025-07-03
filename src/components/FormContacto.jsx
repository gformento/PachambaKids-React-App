import React, { useState } from "react";
import { Nombre } from "./Nombre";
import { Email } from "./Email";
import { Boton } from "../components/Boton";
import "../estilos/FormContacto.css";
import "../estilos/Boton.css";

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
      <div className="container-form">
        <section ref={ref}>
          <br />
          <h2 className="h2"> Formulario de Contacto</h2>

          <Nombre
            valor={form.nombre}
            onChange={(valor) => handleNombre(valor)}
            className="input-field"
          />

          <Email
            valor={form.email}
            onChange={(valor) => handleEmail(valor)}
            className="input-field"
          />

          <Boton
            text={"Enviar Datos"}
            className="boton"
            onClick={handleEnviar}
          ></Boton>
        </section>
      </div>
    </>
  );
});
