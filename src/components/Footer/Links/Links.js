import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// declare styled components
const StyleDivContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  grid-gap: 1rem;

  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-flow: row wrap;
  }
  `;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #555555;

  @media (min-width: 700px) {
    margin: 1rem;
  }
  `;

// declare main component
const links = props => {
  return (
    <StyleDivContainer>
      <StyleLink to='/contact'>Contact</StyleLink>
      <StyleLink to='/privacy'>Privacybeleid</StyleLink>
      <StyleLink to='/algemene-voorwaarden'>Voorwaarden</StyleLink>
      <StyleLink to='/veiligheid'>Gegevensbehandeling</StyleLink>
    </StyleDivContainer>
  );
};

export default links;
