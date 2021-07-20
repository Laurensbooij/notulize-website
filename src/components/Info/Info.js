import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid-template-column: auto;
  grid-template-row: auto;
  justify-items: center;
  grid-gap: 1rem 0;
  max-width: 20rem;
  margin: 1.5rem 0;

  @media (min-width: 700px) {
    margin: 2.5rem 4rem;
  }
`;
const Img = styled.img`
  height: 10rem;
  border-radius: 100px;
  box-shadow: 0 0 10px 0 rgba(85,85,85,0.2);
`;
const H3 = styled.h3`
  color: #555555;
  font-weight: 500;
  margin: 1rem 0 0 0;`;
const P = styled.p`
  text-align: center;
  align-self: start;
  color: #555555;
  height: 4rem;

  @media (max-width: 700px) {
    height: auto;
  }
`;

const info = props => {
  return (
    <Div>
      <Img alt={props.imgAlt} src={props.imgSrc}/>
      <H3>{props.title}</H3>
      <P>{props.text}</P>
    </Div>
  );
};

export default info;
