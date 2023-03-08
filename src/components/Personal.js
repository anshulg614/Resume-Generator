import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Personal = ({ personal, onChange }) => {
  return (
    <PersonalContainer>
      <p>Personal Information</p>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={personal.name}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Enter your street address"
        value={personal.address}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="email"
        name="email"
        placeholder="Enter your email"
        value={personal.email}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="number"
        placeholder="Enter your phone number"
        value={personal.number}
      />
    </PersonalContainer>
  );
};

const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: #1f1f1f;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
`;

export default Personal;
