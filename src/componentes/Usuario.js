import Contador from "./ContadorClass";
import ContadorFuncional from "./ContadorFuncioanl";
import { Titulo } from "./TItulo";
import styled from "styled-components";

const Usuario = () => {
  const sesion = true;
  const pais = "Bolivia";
  const amigos = ["melissa", "daniela", "carlita"];

  return (
    <>
      {sesion ? (
        <>
          {" "}
          <Titulo />
          <Titulo nombre="Juan" color="red" />
          {pais && <p>Eres de {pais}</p>}
          <Parrafo>Tu lista de amigos es:</Parrafo>
          <ul>
            {amigos.map((amigo, index) => (
              <li key={index}>
                {" "}
                {index} - {amigo}{" "}
              </li>
            ))}
          </ul>
          <Contador cantidadIncrementar={10} cantidadDisminuir={5} />
          <ContadorFuncional incrementar={7} decrementar={3} />
        </>
      ) : (
        <p>NO HAS INICIADO SESION</p>
      )}
    </>
  );
};

const Parrafo = styled.p`
  margin: 20px 0;
`;

export default Usuario;
