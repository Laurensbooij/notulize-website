import React from 'react';
import styled from 'styled-components';

//declare styled components
const Div = styled.div`
  color: #555555;
  margin:  0 0 0 2rem;
  max-width: 20rem;

  @media (min-width: 700px) {
    max-width: 30rem;
    padding: 0 2rem;
    margin:  0;
  }
  `;
const H3 = styled.h3`
  margin-top: 0;
  font-weight: 500;
  `;
const P = styled.p`
  color: #555555;
  `;

// declare main component
const review = props => {
  return (
    <Div className={props.className}>
      <H3>{props.title}</H3>
      <P>{props.text}</P>
      <P>{props.signedBy}</P>
    </Div>
  );
};

export default review;
