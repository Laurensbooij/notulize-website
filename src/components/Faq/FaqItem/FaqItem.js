import React from 'react';
import styled, { css } from 'styled-components';

// declare styled components
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  cursor: pointer;
  `;
const H3 = styled.h3`
  color: #555555;
  font-weigt: 500;
  border-bottom: 1px solid rgba(85,85,85,0.6);
  padding: 1rem;
  margin: 0;
  `;
const TextContainer = styled.div`
  overflow: hidden;
  max-height: 0;

  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;

  ${props => props.show === true && css`
    max-height: 400px;
    `}
  `;

const P = styled.p`
  color: #555555;
  padding: 0 1rem;
  transform: translateY(-100%);

  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;

  ${props => props.show === true && css`
    transform: translateY(0);
    `}
  `;


// declare main component
const faqItem = props => {
  return(
    <Div onClick={props.showQuestionHandler}>
      <H3>{props.question}</H3>
      <TextContainer show={props.show}>
        <P show={props.show}>{props.text}</P>
      </TextContainer>
    </Div>
  );
};

export default faqItem;
