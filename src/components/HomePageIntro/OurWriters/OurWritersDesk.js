import React from 'react';
import styled from 'styled-components';

import Writer from './WriterContainer/Writer/Writer';
import Review from './WriterContainer/Review/Review';

import imgWriter1 from '../../../assets/images/writers/writer-nina.png';
import imgWriter2 from '../../../assets/images/writers/writer-anas.png';
import imgWriter3 from '../../../assets/images/writers/writer-regina.png';
import imgRating1 from '../../../assets/images/ratings/rating-45.png';
import imgRating2 from '../../../assets/images/ratings/rating-4.png';
import imgRating3 from '../../../assets/images/ratings/rating-5.png';

// declare styled components
const ScDivMainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  padding: 2rem;
  background-color: rgba(255,255,255,0.9);
  overflow: hidden;

  grid-row: 1 / 3;
  grid-column: 2;

  @media (max-width: 1000px) {
    display: none;
  }
  `;
const ScPTitle = styled.p`
  color: #555555;
  text-align: center;
  font-size: 1.2rem;
  margin: 0 0 2rem 0;
  `;
const ScDivWritersCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  width: 100%;
  margin: 0 0 2rem 0;

  & > div:nth-child(${props => props.activeControl}) > img:nth-of-type(1) {
    box-shadow: 0 0 0 4px #f89521;
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.6s ease-in-out 0s;
  }


  `;
const ScDivReviewCont = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 90rem;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.6s ease-in-out 0s;
  `;


// declare main component
const ourWritersDesk = props => {
  const sliderXpostion = {
    transform: 'translateX('+ (props.sliderXpostion/3) + '%)'
  };

  return (
    <ScDivMainCont>
      <ScPTitle>Wat anderen vinden van onze schrijvers</ScPTitle>
      <ScDivWritersCont activeControl={props.activeControl}>
        <Writer
          writerName='Nina'
          imgWriter={imgWriter1}
          imgRating={imgRating1}
          sliderControlHandler={() => props.sliderControlHandler(1)}
        />
        <Writer
          writerName='Anas'
          imgWriter={imgWriter2}
          imgRating={imgRating2}
          sliderControlHandler={() => props.sliderControlHandler(2)}
        />
        <Writer
          writerName='Regina'
          imgWriter={imgWriter3}
          imgRating={imgRating3}
          sliderControlHandler={() => props.sliderControlHandler(3)}
        />
      </ScDivWritersCont>
      <ScDivReviewCont style={sliderXpostion}>
        <Review
          title='Snelle levering!'
          text='“Nadat ik mijn opdracht heb geüpload nam Nina al erg snel mijn opdracht aan. Ik kreeg mijn resultaat al binnen 24 uur!”'
          signedBy='- Christopher'
        />
        <Review
          title='Goede kwaliteit'
          text='“De kwaliteit van mijn transcript was erg netjes! Anas heeft echt zijn best gedaan en dat was te merken."'
          signedBy='- Mira'
        />
        <Review
          title='Niets op aan te merken, top!'
          text='“Snel aangenomen, snel geleverd en goede kwaliteit. Perfect.'
          signedBy='- Frank'
        />
      </ScDivReviewCont>
    </ScDivMainCont>
  );
};

export default ourWritersDesk;
