import React from 'react';
import styled from 'styled-components';


//// declare styled components ////
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
const P = styled.p`
  color: #555555;
  text-align: center;
  align-self: start;

  @media (min-width: 700px) {
    height: 4rem;
  }
`;
const Span = styled.span`
  font-weight: 500;
  margin 0 0.4rem 0 0;
`;

//// declare main compnent ////
const stepInfo = props => {
  return(
    <Div>
      <Img alt={props.imgAlt} src={props.imgSrc}/>
      <P><Span>{props.stepNo}</Span>{props.text}</P>
    </Div>
  );
};

export default stepInfo;
