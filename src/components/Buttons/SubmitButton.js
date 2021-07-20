import React from 'react';
import styled from 'styled-components';

const ScSubmitButton = styled.button`
  color: #fff;
  background-color: #f89521;
  font-weight: 700;
  padding: 1rem;
  border: 3px solid #f89521;
  text-decoration: none;
  border-radius: 10px;
  margin: 2rem 0 0 0;
`;

const SubmitButton = props => (
  <ScSubmitButton className={props.className} to={props.to}>{props.children}</ScSubmitButton>
);

export default SubmitButton;
