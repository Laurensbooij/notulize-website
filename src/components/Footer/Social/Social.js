import React from 'react';
import styled, { css } from 'styled-components';

import instagramLogo from '../../../assets/icons/social/instagram.png';
import linkedinLogo from '../../../assets/icons/social/linkedin-logo.png';
import facebookLogo from '../../../assets/icons/social/facebook-logo.png';

//declare styled components
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 9rem;
  `;

const Par = styled.p`
  color: #555555;
  margin: 0 0 1rem 0;
  `;

const DivIconContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 2rem 2rem 2rem;
  grid-gap: 0.5rem;
  `;

const ImgSocialIcon = styled.div`
  display: inline-block;
  grid-row: 1;
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  cursor: pointer;

  ${props => props.theme === 'instagram' && css`
    background-color: #C42D65;
    `}
  ${props => props.theme === 'facebook' && css`
    background-color: #3B5998;
    `}
  ${props => props.theme === 'linkedin' && css`
    background-color: #007AB9;
    `}

  background-image: url(${props => props.image});
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-in-out;

  @media (min-width: 700px) {
    background-color: #BEBEBE;

    &:hover {
      ${props => props.theme === 'instagram' && css`
        background-color: #C42D65;
        `}
      ${props => props.theme === 'facebook' && css`
        background-color: #3B5998;
        `}
      ${props => props.theme === 'linkedin' && css`
        background-color: #007AB9;
        `}

      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }
  `;

//declare main component
const social = props => {
  return (
    <DivContainer>
      <Par>Volg Notulize op</Par>
      <DivIconContainer>
        <ImgSocialIcon alt='Instagram logo' image={instagramLogo} theme='instagram'/>
        <ImgSocialIcon alt='Facebook logo' image={facebookLogo} theme='facebook'/>
        <ImgSocialIcon alt='LinkedIn Logo' image={linkedinLogo} theme='linkedin'/>
      </DivIconContainer>
    </DivContainer>
  );
};

export default social;
