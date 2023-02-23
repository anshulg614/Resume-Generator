import React from "react";
import styled from "styled-components";

const Input = ( { placeholder } ) => {
  return (
    <>
      <InputContainer placeholder = { placeholder }/>
    </>
  );
};
const InputContainer = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid #ccc;
`;

export default Input;
