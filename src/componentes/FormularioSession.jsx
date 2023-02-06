import React, { useState } from "react";
import Boton from "../elementos/Boton";
import "./formularioSesion.css";

const FormularioInicioSession = ({ setSesion }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  //   const onChangeUsuario = (e) => {
  //     setUsuario(e.target.value);
  //   };

  //   const onChangePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  /**
   * con el evento (e) podemos acceder a varias propiedades
   * este evento no ayuda a saber que elemento estamos realizando
   * una accion en el DOM
   */
  const onChangeInput = (e) => {
    /**
     * con e.target.name accedemos a la propiedad name de los elementos
     * html que nosotros definimos
     * este name le asiganos de manera manual a cada input
     */
    if (e.target.name === "usuario") {
      /**
       * con e.target.value
       */
      setUsuario(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (usuario === "Juan" && password === "123") {
      console.log("datos correctos");
      setSesion(true);
    } else {
      console.log("datos incorrectos");
      setUsuario("");
      setPassword("");
    }
  };

  return (
    /**
     * los formularios necesitan tener un botton con propiedad on submit
     * ese al se presionado ejecuta la funcion onSubmit del form
     */

    <form onSubmit={enviarFormulario} className="formulario">
      <h1>No has iniciado session</h1>
      <p>Usuario: {usuario}</p>
      <p>Contraseña: {password}</p>

      <div>
        <label htmlFor="usuario" className="label">
          Usuario
        </label>
        {/*
            los input para ser manejados debemos asignas la propiedad "value"
            el cual reflejara el estado de una variable
            y ademoas debemos asignar la propiedad "onChange" la cual nos ayuda
            a actualizar ese valor a traves de una funcion
          */}
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChangeInput}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChangeInput}
          className="input"
        />
      </div>
      <button type="submit" className="boton">
        Iniciar Sesion
      </button>
      <div>
        <Boton largo marginTop type="submit">
          Iniciar Sesion SC
        </Boton>
      </div>
    </form>
  );
};

export default FormularioInicioSession;
