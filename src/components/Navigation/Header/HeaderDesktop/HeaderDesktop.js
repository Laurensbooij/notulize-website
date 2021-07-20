import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import images
import logoDarkImg from '../../../../assets/logo/notulize-logo-grey.png';

// Declaring styled components //
const StyleHeaderDesktop = styled.header`
  height: 4rem;
  width: 100vw;
  padding: 0 2rem;
  background: #FAFAFA;
  box-shadow: 0 2px 4px 0 #555555;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
  `;

const StyleNavDesktop = styled.nav`
  display: flex;
  align-items: center;`;

const StyleLogoImgDesktop = styled.img`
  height: 1.5rem;
  margin: 0 2rem 0 0;
`;

const StyleNavLinkDesktop = styled(NavLink)`
  text-decoration: none;
  color: #555555;
  font-weight: 500;
  font-size: 1.2rem;
  position: relative;
  margin: 0 1rem 0 1rem;

  &:before {
    content: "";
    position: absolute;
    width: 120%;
    height: 3px;
    border-radius: 100px;
    left: -10%;
    bottom: -6px;
    background-color: #f89521;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  &.active:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

// decalring main component //
const HeaderDesktop = props => (
  <StyleHeaderDesktop>
    <StyleNavDesktop>
      <NavLink to='/'>
        <StyleLogoImgDesktop alt='Notulize logo' src={logoDarkImg}/>
      </NavLink>
      <StyleNavLinkDesktop to='/upload'>Uploaden</StyleNavLinkDesktop>
      <StyleNavLinkDesktop to='/veiligheid'>Veiligheid</StyleNavLinkDesktop>
      <StyleNavLinkDesktop to='/faq'>FAQ</StyleNavLinkDesktop>
    </StyleNavDesktop>
  </StyleHeaderDesktop>
);

export default HeaderDesktop;
