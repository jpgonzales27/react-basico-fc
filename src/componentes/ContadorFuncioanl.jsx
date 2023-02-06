import React, { useEffect, useState } from "react";
import Boton from "../elementos/Boton";
import "./contador.css";

const ContadorFuncional = ({ incrementar, decrementar }) => {
  const [contador, setContador] = useState(0);
  /**
   * useEffect es igual a componentDidMount y componentDidUpdate
   * este hook se ejecuta cada ciclo de renderizado
   */
  useEffect(() => {
    console.log("Solo se ejecuta cada vez que el componente se renderize");
  });

  /**
   * useEffect cuando le agregamos el [] solo se ejecuta una vez y
   *  es igual a componentDidMount
   */
  useEffect(() => {
    console.log("Solo se ejecuta cuando el componente carga por primera vez");
    //conectar a la API
  }, []);

  /**
   * useEffect cuando le agregamos el [state] solo se ejecuta cada vez
   * que el estado de una variable cambio
   */
  useEffect(() => {
    console.log("Solo se ejecuta cuando el estado de la dependencia cambia");
  }, [contador]);

  /**
   * useEffect cuando queremos hacer alguna acciona al eliminar el componetne del DOM
   * debemos hacer esta accion en el return del useEffect
   */
  useEffect(() => {
    //codigo del efecto
    return () => {
      console.log("Se quito el componente va desaparecer del DOM");
      //cerrar coneccion a la API
    };
  }, []);

  const increment = (cantidad) => {
    setContador(contador + cantidad);
  };

  const decrement = (cantidad) => {
    setContador(contador - cantidad);
  };

  return (
    <div>
      <h1>CONTADOR FUNCIONAL:{contador}</h1>
      <button onClick={() => increment(incrementar)} className="boton-contador">
        +{incrementar}
      </button>
      <button onClick={() => decrement(decrementar)} className="boton-contador">
        -{decrementar}
      </button>
      <Boton
        negro
        onClick={() => increment(incrementar)}
        className="boton-contador"
      >
        +{incrementar} SC
      </Boton>
      <Boton
        negro
        marginRight
        onClick={() => decrement(decrementar)}
        className="boton-contador"
      >
        -{decrementar} SC
      </Boton>
    </div>
  );
};

export default ContadorFuncional;
