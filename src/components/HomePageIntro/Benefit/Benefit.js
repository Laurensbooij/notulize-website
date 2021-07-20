import React from 'react';
import styled, { css } from 'styled-components';

import imgCheckmark from '../../../assets/icons/checkmark.png';
import imgCheckmarkGreen from '../../../assets/icons/checkmark-green.png';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.2rem 0;
  `;
const Img = styled.img`
  height: 1.2rem;

  ${props => props.theme === 'meetWriter' && css`
    height: 1rem;
    `}
  `;
const P = styled.p`
  color: #fff;
  margin: 0 0.8rem;
  foint-weight: 500;
  font-size: 1.2em;
  text-shadow: 0 0 6px rgba(0,0,0, 0.8);

  ${props => props.theme === 'meetWriter' && css`
    color: #555555;
    text-shadow: none;
    font-size: 1em;
    `}
  `;

const benefit = props => {
  let img = imgCheckmark;
  if (props.theme === 'meetWriter') {
    img = imgCheckmarkGreen;
  }

  return (
    <Div>
      <Img theme={props.theme} alt='Voordeel van Notulize' src={img}/>
      <P theme={props.theme} >{props.text}</P>
    </Div>
  );
};

export default benefit;
