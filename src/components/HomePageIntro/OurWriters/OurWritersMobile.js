import React from 'react';
import styled from 'styled-components';

import WriterContainer from './WriterContainer/WriterContainer';
import SliderControls from './SliderControls/SliderControls';

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
  margin-left: -2rem;
  width: 100vw;
  padding: 1rem;
  background-color: rgba(255,255,255,0.9);
  overflow: hidden;

  grid-column: 1
  grid-row: 2;

  @media (min-width: 1000px) {
    display: none;
  }
  `;
const ScPTitle = styled.p`
  color: #555555;
  text-align: center;
  font-size: 1.2rem;
  `;
const ScDivSliderCont = styled.div`
  overflow: hidden;
  display: flex;
  width: 300vw;
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  `;


// declare main component
const ourWritersMobile = props => {
    const sliderXpostion = {
      transform: 'translateX('+ props.sliderXpostion + 'vw)'
    };

    return (
      <ScDivMainCont>
        <ScPTitle>Wat anderen vinden van onze schrijvers</ScPTitle>
        <ScDivSliderCont style={sliderXpostion}>
          <WriterContainer
            writerName='Nina'
            imgWriter={imgWriter1}
            imgRating={imgRating1}
            title='Snelle levering!'
            text='“Nadat ik mijn opdracht heb geüpload nam Nina al erg snel mijn opdracht aan. Ik kreeg mijn resultaat al binnen 24 uur!”'
            signedBy='- Christopher'
          />
          <WriterContainer
            writerName='Anas'
            imgWriter={imgWriter2}
            imgRating={imgRating2}
            title='Goede kwaliteit'
            text='"De kwaliteit van mijn transcript was erg netjes! Anas heeft echt zijn best gedaan en dat was te merken."'
            signedBy='- Mira'
          />
          <WriterContainer
            writerName='Regina'
            imgWriter={imgWriter3}
            imgRating={imgRating3}
            title='Niets op aan te merken, top!'
            text='Snel aangenomen, snel geleverd en goede kwaliteit. Perfect.'
            signedBy='- Frank'
          />
        </ScDivSliderCont>
        <SliderControls sliderControlHandler={props.sliderControlHandler} activeControl={props.activeControl}/>
      </ScDivMainCont>
    );
  };


export default ourWritersMobile;
