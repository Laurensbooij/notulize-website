import React, { Component } from 'react';
import styled from 'styled-components';

import Writer from '../../components/HomePageIntro/OurWriters/WriterContainer/Writer/Writer';
import Benefit from '../../components/HomePageIntro/Benefit/Benefit';
import Review from '../../components/HomePageIntro/OurWriters/WriterContainer/Review/Review';
import SliderControls from '../../components/HomePageIntro/OurWriters/SliderControls/SliderControls';

// import images
import imgWriter from '../../assets/images/writers/writer-nina.png';
import imgRating from '../../assets/images/ratings/rating-45.png';

// declare styled components
const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 4rem 2rem;
  `;
const H2 = styled.h2`
  color: #555555;
  font-weight: 700;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 4rem;`;
const WriterDisplayCont = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  background-color: #F6F6F6;
  border: 1px solid #E8E8E8;
  border-radius: 15px;
  padding: 1rem;


  @media (min-width: 600px) {
    padding: 3rem;
  }
  @media (min-width: 950px) {
    grid-row: 1;
    grid-column: 1;
  }
  `;
const GridItem1 = styled.div`
  display: grid;
  grid-gap: 2rem 0;
  grid-template-columns: auto;
  justify-items: center;
  grid-row: 1;
  grid-column: 1;

  @media (min-width: 600px) {
    grid-template-columns: 2fr 3fr;
  }

  @media (min-width: 950px) {
    grid-template-columns: auto;
    grid-row: 1;
    grid-column: 1;
  }
  `;
const GridDevider = styled.div`
  grid-row: 2;
  grid-column: 1;
  height: 1px;
  width: 100%;
  background-color: #979797;
  border-radius: 10px;

  @media (min-width: 950px) {
    grid-row: 1;
    grid-column: 2;
    height: 100%;
    width: 1px;
  }
`;
const GridItem2 = styled.div`
  grid-row: 3;
  grid-column: 1;
  display: grid;

  @media (min-width: 950px) {
    grid-row: 1;
    grid-column: 3;
  }
  `;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  color: #555555;
  margin: 0 0 1rem 2rem;
  `;
const ScDivReviewCont = styled.div`
  width: 90vw;
  overflow: hidden;

  @media (min-width: 600px) {
    width: 30rem;
  }
  `;
const ScReview = styled(Review)`
  width: 100%;
  max-width: none;
    @media (min-width: 600px) {
    width: 30rem;
    }
  `;
const ScDivSliderCont = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 300%;
  transform: translateX(${props => props.sliderXpostion}%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.6s ease-in-out 0s;
  `;
const ScSliderControls = styled(SliderControls)`
  justify-self: center;`;

// declare main component
class MeetWriter extends Component {
  state = {
    sliderXpostion: 0,
    activeControl: 1
  }

  sliderControlHandler = (clickedControl) => {
    let newXposition;

    if (clickedControl === 1) {
      newXposition = 0;
    }
    else if (clickedControl === 2) {
      newXposition = -33.3;
    }
    else if (clickedControl === 3) {
      newXposition = -66.6;
    }
    this.setState({
      sliderXpostion: newXposition,
      activeControl: clickedControl
    })
  }

  render () {
    return (
      <Section>
        <H2>Ontmoet een van onze schrijvers</H2>
        <WriterDisplayCont>
          <GridItem1>
            <Writer
              writerName='Nina'
              imgWriter={imgWriter}
              imgRating={imgRating}
              />
            <div>
              <Benefit theme='meetWriter' text='Gescreend door Notulize'/>
              <Benefit theme='meetWriter' text='Geheimhoudingsverklaring'/>
              <Benefit theme='meetWriter' text='Studente Journalistiek'/>
            </div>
          </GridItem1>
          <GridDevider/>
          <GridItem2>
            <H3>Wat klanten over Nina zeggen</H3>
            <ScDivReviewCont>
              <ScDivSliderCont sliderXpostion={this.state.sliderXpostion}>
                <ScReview
                  title='Snelle levering!'
                  text='“Nadat ik mijn opdracht heb geüpload nam Nina al erg snel mijn opdracht aan. Ik kreeg mijn resultaat al binnen 24 uur!”'
                  signedBy='- Christopher'
                />
                <ScReview
                  title='Super tevreden.'
                  text='“De kwaliteit van de transcriptie is top! En dat voor een prijs die veel lager is dan bij de concurrentie!”'
                  signedBy='- Isabel'
                />
                <ScReview
                  title='Mooi op tijd en goede kwaliteit'
                  text='“Ik kreeg mijn transcriptie keurig binnen de aangegeven levertijd, de kwaliteit die Nina levert is ook top.”'
                  signedBy='- Eva'
                />
              </ScDivSliderCont>
            </ScDivReviewCont>
            <ScSliderControls
              sliderControlHandler={this.sliderControlHandler}
              activeControl={this.state.activeControl}
            />
          </GridItem2>
        </WriterDisplayCont>
      </Section>
    );
  };
};

export default MeetWriter;
