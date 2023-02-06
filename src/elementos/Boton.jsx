import styled, { css } from "styled-components";
const Boton = styled.button`
  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: 3s ease all;
  width: ${(props) => (props.largo ? "100%" : "auto")};

  &:hover {
    background: #44a559;
    color: #fff;
  }

  ${(props) =>
    props.negro &&
    css`
      background: #000;
      color: #fff;
      display: inline-block;
      padding: 20px;
      border: none;
      font-weight: bold;
      font-family: Arial, sans-serif;
      cursor: pointer;
      transition: 0.3s ease all;
      border-radius: 3px;
      margin-right: 10px;

      &:hover {
        background: #fff;
        color: #000;
      }
    `}

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 10px;
    `}
  ${(props) =>
    props.marginRight &&
    css`
      margin-right: 10px;
    `}
`;

export default Boton;
