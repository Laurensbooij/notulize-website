import React from 'react';
import styled from 'styled-components';

import Writer from './Writer/Writer';
import Review from './Review/Review';

// declare styled components
const Div =  styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  padding: 1rem;
  `;

// declare main component
const writerContainer = props => {
  return (
    <Div>
      <Writer
        writerName={props.writerName}
        imgWriter={props.imgWriter}
        imgRating={props.imgRating}
        />
      <Review
        title={props.title}
        text={props.text}
        signedBy={props.signedBy}
      />
    </Div>
  );
};

export default writerContainer
