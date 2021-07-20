import React from 'react';
import styled from 'styled-components';

import Info from '../Info/Info';
import LinkButton from '../Buttons/LinkButton';

import writerImg from '../../assets/icons/writer.png';
import euroImg from '../../assets/icons/euro.png';
import timeImg from '../../assets/icons/time.png';

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

const benefits = props => {
  return (
    <Section>
      <H2>De voordelen van Notulize</H2>
        <Div>
          <Info
            title='Gekwalificeerde schrijvers'
            text='Alle schrijvers die bij Notulize zijn aangesloten hebben een screening doorlopen. Ook tekenen zij allen een geheimhoudingsverklaring voordat zij opdrachten kunnen aannemen.'
            imgAlt='Hoge kwaliteit'
            imgSrc={writerImg}
          />
          <Info
            title='De beste prijs'
            text='Notulize bied dezelfde kwaliteit als andere services, voor een betere prijs. Deze lage prijs kunnen wij bieden dankzij het notulize platform.'
            imgAlt='Lage prijs'
            imgSrc={euroImg}
          />
          <Info
            title='Snelle levering'
            text='Een schrijver levert binnen 72 uur nadat hij/zij is geaccepteerd voor een opdracht.'
            imgAlt='Snelle levertijd'
            imgSrc={timeImg}
          />
        </Div>
        <LinkButton to='/upload'>Probeer het zelf</LinkButton>
    </Section>
  );
};

export default benefits;
