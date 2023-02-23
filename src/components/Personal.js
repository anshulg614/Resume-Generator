import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Personal = () => {
  return (
    <PersonalContainer>
      <p>Personal Information</p>
      <Input type="text" placeholder="Enter your full name" />
      <Input type="text" placeholder="Enter your street address" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="text" placeholder="Enter your phone number" />
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
color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Personal;
