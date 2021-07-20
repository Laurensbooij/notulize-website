import React from 'react';
import styled from 'styled-components';

// declare styled components
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
const ScImgWriter = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 100px;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
  `;
const P = styled.p`
  color: #555555;`;
const ScImgRating = styled.img`
  height: 1rem;
  `;

// declare main component
const writer = props => {
  return (
    <Div className={props.className}>
      <ScImgWriter alt='Notulize schrijver' src={props.imgWriter} onClick={props.sliderControlHandler}/>
      <P>{props.writerName}</P>
      <ScImgRating alt='Hoog beoordeeld' src={props.imgRating}/>
    </Div>
  );
};

export default writer;
