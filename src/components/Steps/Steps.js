import React from 'react';
import styled from 'styled-components';

import StepInfo from './StepInfo/StepInfo';
import LinkButton from '../Buttons/LinkButton';

import imgUpload from '../../assets/icons/cloud.png';
import imgWriter from '../../assets/icons/writer.png';
import imgResult from '../../assets/icons/transcript.png';




const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 4rem 2rem;
  `;

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  `;

const H2 = styled.h2`
  color: #555555;
  font-weight: 700;
  font-size: 1.6rem;
  text-align: center;`;

const steps = props => {
  return (
    <Section>
      <H2>De stappen van Notulize</H2>
      <Div>
        <StepInfo
          stepNo='1.'
          text='Upload het audiobestand en plaats de opdracht.'
          imgAlt='Upload audiobestand'
          imgSrc={imgUpload}
        />
        <StepInfo
          stepNo='2.'
          text='De opdracht komt op het platform te staan en onze gekwalificeerde schrijvers kunnen de opdrachten aannemen.'
          imgAlt='Transcriptie aangenomen'
          imgSrc={imgWriter}
        />
        <StepInfo
          stepNo='3.'
          text='De schrijver levert het eindresultaat binnen 72 uur na het accepteren van de opdracht aan.' imgAlt='Korte levertijd'
          imgSrc={imgResult}
        />
      </Div>
      <LinkButton to='/upload'>Probeer het zelf</LinkButton>
    </Section>
  );
};

export default steps;
