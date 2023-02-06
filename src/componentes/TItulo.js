//*imr import react
import React from "react";

const TituloRojo = (props) => {
  console.log(props);
  const colorTexto = "red";

  return (
    <h1 className="" style={{ color: colorTexto }}>
      Bienvenido {props.nombre} has iniciado sesion
    </h1>
  );
};

const TituloAzul = ({ nombre, edad }) => {
  const colorTexto = "blue";

  return (
    <h1 className="" style={{ color: colorTexto }}>
      Bienvenido {nombre} has iniciado sesion con {edad} años
    </h1>
  );
};

const Titulo = ({ nombre = "usuario", color = "green" }) => {
  return (
    <h1 className="" style={{ color: color }}>
      Bienvenido {nombre} has iniciado sesion
    </h1>
  );
};

export { Titulo };
