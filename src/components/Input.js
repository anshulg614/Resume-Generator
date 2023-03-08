import React from "react";
import styled from "styled-components";

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <>
      <InputContainer
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};
const InputContainer = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #4d4d4d;
  color: white;

  ::placeholder {
    color: #BEBEBE;
  }

  &:focus {
    border: 1px solid #ccc;
`;

export default Input;
