import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Blog from "./componentes/Blog";
import EjmploUseReducer from "./componentes/EjmploYseReducer";
import FormularioInicioSession from "./componentes/FormularioSession";
import Usuario from "./componentes/Usuario";
import Boton from "./elementos/Boton";
import "./index.css";

const nombre = "Juan Pablo";
const pais = "Bolivia";
const sesion = true;
const amigos = ["melissa", "daniela", "carlita"];

const jsx = (
  //fragmentos para no tener un div padre
  <>
    {/*
      condiciones usamos ternarios (condicion) ? true : false
      para devolver elementos jsx si se cumple o no una condicion dada
    */}
    {sesion ? (
      <>
        {" "}
        <h1 className="" style={{ color: "red" }}>
          hola {nombre} has iniciado sesion
        </h1>
        {/*
              (condicon) && true
              solo si la condicion es verdadera se devuelve el resultado
              si no se cumple no hace nada
            */}
        {pais && <p>Eres de {pais}</p>}
        {amigos}
        {/*
           recorrer arreglos usando la funcion map
           hay 2 manesras en multipples lines usando return
           o en una sola linea sin emplear el return explicito
        */}
        {/* Return explicito */}
        <ul>
          {amigos.map((amigo, index) => {
            return (
              <li key={index}>
                {index} - {amigo}
              </li>
            );
          })}
        </ul>
        {/* Return implicito */}
        <ul>
          {amigos.map((amigo, index) => (
            <li key={index}>
              {" "}
              {index} - {amigo}{" "}
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p>NO HAS INICIADO SESION</p>
    )}
  </>
);

const jsxConmponente = (
  <>
    {sesion ? (
      <>
        <Usuario />
        <Usuario />
        <Usuario />
      </>
    ) : (
      <h1>NO has iniciado session</h1>
    )}{" "}
  </>
);

const App = () => {
  const [sesion, setSesion] = useState(true);

  const cerrarSesion = () => {
    setSesion(!sesion);
  };

  return (
    <div className="contenedor">
      {sesion ? (
        <>
          <Usuario />
          <EjmploUseReducer />
          <Blog />
          <button onClick={() => alert("Cerrar Sesion")}>Cerrar Sesion</button>
          <button onClick={cerrarSesion}>logout</button>
          <button onClick={() => setSesion(false)}>logout2</button>
          <Boton marginTop onClick={() => setSesion(false)}>
            Cerrar Sesion SC
          </Boton>
        </>
      ) : (
        <>
          {/*
            podemos pasar funciones como propiedades
            esto nos sirve para poder pasar el cambio de valor
            es decir brindar al componente hijo que desde ahi puede cambiar
            el valor del estado del padre
          */}
          <FormularioInicioSession setSesion={setSesion} />
          <button onClick={cerrarSesion}>login</button>
          <button onClick={() => setSesion(true)}>login2</button>
        </>
      )}{" "}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
