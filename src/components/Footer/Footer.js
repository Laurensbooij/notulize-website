import React from 'react';
import styled from 'styled-components';

import Social from './Social/Social';
import Links from './Links/Links';


const StyleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 2.5rem 1.5rem;
  background-color: #F4F4F4;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem;
  }
  `;

const StyleDivBreakline = styled.div`
  display: inline-block;
  height: 1px;
  width: 80vw;
  margin: 1.5rem 0;
  background-color: #979797;
  border-radius: 50px;

  @media (min-width: 700px) {
    margin: 0 1.5rem;
    height: 6rem;
    width: 1px;
  }
  `;

const footer = props => {
  return (
    <StyleFooter>
      <Social/>
      <StyleDivBreakline/>
      <Links/>
    </StyleFooter>
  );
};

export default footer;
