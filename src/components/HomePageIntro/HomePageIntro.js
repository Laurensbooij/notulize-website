import React from 'react';
import styled from 'styled-components';

import Benefit from './Benefit/Benefit';
import OurWriters from '../../containers/HomePage/OurWriters/OurWriters';
import LinkButton from '../Buttons/LinkButton';

import bgImg from '../../assets/images/woman-laptop_black30.jpg';
import logoWhiteImg from '../../assets/logo/notulize-logo-white-shadow.png';


// declare styled components
const Header = styled.header`
  padding: 0.5rem 2rem;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  `;
const ScImgLogo = styled.img`
  height: 2rem;
  margin: 1rem 0;
  grid-row: 1;

  @media (min-width: 700px) {
    display: none;
  }
  `;

const GridCont = styled.div`
  display: grid;
  grid-gap: 2rem 4rem;
  width: fit-content;
  grid-template-columns: auto;
  justify-self: center;
  margin: 2rem 0;
  `;

const GridItem1 = styled.div`
  grid-column: 1;
  grid-row: 1;

  @media (min-width: 1000px) {
    justify-self: end;
  }
  `;

const H1 = styled.h1`
  font-size: 1.6rem;
  text-shadow: 0 0 4px rgba(0,0,0, 0.8);
  color: #fff;
  margin-right: 2rem;

  @media (min-width: 1000px) {
    margin: 1rem 0 4rem 0;
  }`;

const ScLinkButton = styled(LinkButton)`
  color: #fff;
  grid-column: 1;
  grid-row: 3;
  margin: 0;
  justify-self: center;
  align-self: start;

  @media (min-width: 1000px) {
    grid-column: 1;
    grid-row: 2;
  }
`;

// Ourwriters grid styling in component

// declare main component
const homePageIntro = props => {
  return (
    <Header>
      <ScImgLogo alt='Notulize' src={logoWhiteImg}/>
      <GridCont>
        <GridItem1>
          <H1>Vind jouw ervaren schrijver</H1>
          <Benefit text='Geen onverwachte kosten'/>
          <Benefit text='Gekwalificeerde schrijvers'/>
          <Benefit text='72 uur levertijd'/>
        </GridItem1>
        <OurWriters/>
        <ScLinkButton to='/upload'>Probeer het zelf</ScLinkButton>
      </GridCont>
    </Header>
  );
};

export default homePageIntro;
