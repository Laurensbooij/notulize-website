import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';


// import images
import menuIcon from '../../../assets/icons/menu/hamburger-menu.png';
import closeMenuIcon from '../../../assets/icons/menu/close-menu.png';
import logoWhiteImg from '../../../assets/logo/notulize-logo-white.png';

// declare styled components
const MenuToggle = styled.div`
  z-index: 2;
  position: fixed;
  top: 0.5rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 #555555;

  ${props => props.menuState === false && css`
    background-image:url(${menuIcon});
    `}

  ${props => props.menuState === true && css`
    background-image:url(${closeMenuIcon});
    `}

  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: center;

  @media (min-width: 700px) {
    display: none;
  }`;
const ScOverlayMenuContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(248,149,33, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }`;
const ScNavMobile = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;`;

const ScLogoImgMobile = styled.img`
  height: 1.5rem;
  margin: 0 0 1rem 0;
`;

const ScNavLinkMobile = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #FAFAFA;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0.6rem 0;
  `;


// declare  main component
const menuToggle = props => {

  let menuOverlay = null;

  if (props.menuState) {
    menuOverlay = (
      <ScOverlayMenuContainer>
        <ScNavMobile>
          <ScNavLinkMobile to='/'>
            <ScLogoImgMobile alt='Notulize logo' src={logoWhiteImg}/>
          </ScNavLinkMobile>
          <ScNavLinkMobile to='/upload'>Uploaden</ScNavLinkMobile>
          <ScNavLinkMobile to='/veiligheid'>Veiligheid</ScNavLinkMobile>
          <ScNavLinkMobile to='/faq'>FAQ</ScNavLinkMobile>
        </ScNavMobile>
      </ScOverlayMenuContainer>);
  }

  return (
    <Aux>
      <MenuToggle onClick={props.menuToggle} menuState={props.menuState}/>
      {menuOverlay}
    </Aux>
  );
};

export default menuToggle;
