import React from 'react';
import styled from 'styled-components';

import Info from '../Info/Info';

// import images //
import SafeUploadImg from '../../assets/icons/no-upload.png';
import encryptedImg from '../../assets/icons/encrypted.png';
import CloudImg from '../../assets/icons/cloud.png';
import NdaImg from '../../assets/icons/NDA.png';

// declare styled components //
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

// declare main component //
const SecurityDetails = props => (
  <Section>
    <H2>Veiligheid</H2>
    <Div>
      <Info
        title='Gekwalificeerde schrijvers'
        text='Alle schrijvers die bij Notulize zijn aangesloten hebben een screening doorlopen. Ook tekenen zij allen een geheimhoudingsverklaring voordat zij opdrachten kunnen aannemen.'
        imgAlt='Veilig uploaden'
        imgSrc={SafeUploadImg}
      />
      <Info
        title='Gekwalificeerde schrijvers'
        text='Alle schrijvers die bij Notulize zijn aangesloten hebben een screening doorlopen. Ook tekenen zij allen een geheimhoudingsverklaring voordat zij opdrachten kunnen aannemen.'
        imgAlt='Versleuteling'
        imgSrc={encryptedImg}
      />
      <Info
        title='Gekwalificeerde schrijvers'
        text='Alle schrijvers die bij Notulize zijn aangesloten hebben een screening doorlopen. Ook tekenen zij allen een geheimhoudingsverklaring voordat zij opdrachten kunnen aannemen.'
        imgAlt='Alles blijft in de cloud'
        imgSrc={CloudImg}
      />
      <Info
        title='Gekwalificeerde schrijvers'
        text='Alle schrijvers die bij Notulize zijn aangesloten hebben een screening doorlopen. Ook tekenen zij allen een geheimhoudingsverklaring voordat zij opdrachten kunnen aannemen.'
        imgAlt='Geheimhoudingsverklaring'
        imgSrc={NdaImg}
      />
    </Div>
  </Section>
);

export default SecurityDetails;
