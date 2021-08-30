import styled from "styled-components";

interface ButtonProps {
  buttonType?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) =>
    props.buttonType && props.buttonType === "primary" ? "#fff" : "#21D170"};
  background-color: ${(props) =>
    props.buttonType && props.buttonType === "primary" ? "#21D170" : "#fff"};
  border: ${(props) =>
    props.buttonType && props.buttonType === "secondary"
      ? "1px solid #21D170"
      : "none"};
`;
