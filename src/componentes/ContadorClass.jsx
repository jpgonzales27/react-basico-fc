import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  componentDidMount() {
    console.log("Ejecuta codigo cuando el componente se cargo en el DOM");
    //llamadas a alguna API
  }

  componentDidUpdate(propiedadesAnteriores, estadoAnterior) {
    console.log("Ejecuta codigo cuando el estado del componente se actualiza");
    console.log("Propiedades anteriores del componente", propiedadesAnteriores);
    console.log("Estado anterior del componente", estadoAnterior);
  }

  componentWillUnmount() {
    console.log("Ejecuta codigo antes de elimianr el componente del DOM");
    //terminasmos la llamadad a la API
  }

  incrementar(cantidad) {
    console.log("+1");
    this.setState((estadoAnterior) => {
      return {
        contador: estadoAnterior.contador + cantidad,
      };
    });
  }

  decrementar(cantidad) {
    console.log("-1");
    this.setState((estadoAnterior) => {
      return {
        contador: estadoAnterior.contador - cantidad,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Contador Clase:{this.state.contador}</h1>
        <button
          onClick={() => this.incrementar(this.props.cantidadIncrementar)}
        >
          +{this.props.cantidadIncrementar}
        </button>
        <button onClick={() => this.decrementar(this.props.cantidadDisminuir)}>
          -{this.props.cantidadDisminuir}
        </button>
      </div>
    );
  }
}

export default Contador;
