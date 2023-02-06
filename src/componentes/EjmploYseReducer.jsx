import React, { useReducer } from "react";
import Boton from "../elementos/Boton";

//Estado Inicial
const contadorInicial = { contador: 0 };

//funcion reducer
const reducer = (estado, accion) => {
  /**
   * accion.tipo - recibe el objeto enviado por el dispatch lo evaluda
   * y ejecuta el bloque de codigo corespondiente
   */
  switch (accion.tipo) {
    case "INCREMENTAR":
      return { contador: estado.contador + 1 };
    case "DECREMENTAR":
      return { contador: estado.contador - 1 };
    case "REINICIAR":
      return { contador: 0 };
    default:
      return estado;
  }
};

const EjmploUseReducer = () => {
  /**
   * useReducer - es similar al useState pero en este nos pide una funcion(reducer)
   * la cual sera la encarga de controlar el codigo que se ejecutara de acuerdo a la
   * accion (dispatch) que ejecutemos
   *
   * estado - es la variable encarga de manejar nuestro estado
   * dispatch - es la accion que vamos a realizar es decir la accion que
   *          haremos ejecutar al reducer se le envia como parametro un objeto
   * reducer - la funcion reductora que se ejecutara
   * contadorInical - el valor inicial de nuestro estado se define como un objeto
   */
  const [estado, dispatch] = useReducer(reducer, contadorInicial);

  return (
    <div>
      {/*
        para poder ver el valor de nuestro estado debemos recordar que en
        este caso es un objeto asi que debemos ingresar como tal {estado.contador}
      */}
      <h1>CONTADOR USEREDUCER:{estado.contador}</h1>
      {/*
        en el evento onClick ejecutaremos nuestra funcion dispatch la cual se
        encarga de decile al reducer que accion es la que debe ejecutar
      */}
      <Boton negro onClick={() => dispatch({ tipo: "INCREMENTAR" })}>
        Incrementar
      </Boton>
      <Boton
        negro
        marginRight
        onClick={() => dispatch({ tipo: "DECREMENTAR" })}
      >
        Decrementar
      </Boton>
      <Boton negro marginRight onClick={() => dispatch({ tipo: "REINICIAR" })}>
        Reiniciar
      </Boton>
    </div>
  );
};

export default EjmploUseReducer;
