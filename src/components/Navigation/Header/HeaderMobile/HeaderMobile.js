import React from 'react';
import styled from 'styled-components';

// import images //
import bgImg from '../../../../assets/images/woman-laptop_black30.jpg';

// declaring styled components //
const StyleHeaderMobile = styled.header`
  height: 4rem;
  width: 100vw;
  background-image:url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 35%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 420px) {
    justify-content: center;
  }

  @media (min-width: 700px) {
    display: none;
  }
  `;

const StyleTitleH1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 2rem;

  @media (min-width: 700px) {
    display: none;
  }
  `;

// declaring main component //
const HeaderMobile = props => {
  console.log(props);
  return (
    <StyleHeaderMobile>
      <StyleTitleH1>{props.title}</StyleTitleH1>
    </StyleHeaderMobile>
  );
};

export default HeaderMobile;
