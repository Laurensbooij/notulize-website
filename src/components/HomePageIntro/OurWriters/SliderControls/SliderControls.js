import React from 'react';
import styled from 'styled-components';

// declare styled components
const Div = styled.div`
  display: grid;
  grid-gap: 0 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem 0 0 0;
  width: fit-content;

  & > div:nth-child(${props => props.active}) {
    background-color: #979797;
  }
  `;

const DivControl = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100px;
  border: 2px solid #979797;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  `;

// declare main component
const sliderControls = props => {
  return (
    <Div className={props.className} active={props.activeControl}>
      <DivControl onClick={() => props.sliderControlHandler(1)} />
      <DivControl onClick={() => props.sliderControlHandler(2)} />
      <DivControl onClick={() => props.sliderControlHandler(3)} />
    </Div>
  );
};

export default sliderControls;
