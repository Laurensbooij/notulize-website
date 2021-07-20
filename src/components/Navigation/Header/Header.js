import React from 'react';
import styled, { css } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';

//// Declaring  main component ////
const Header = ({ title, ...props }) => (
    <Aux>
      <Switch>
        <Route exact path='/' component={null} />
        <Route exact path='/' component={null} />
        <Route render={(props) => <HeaderMobile title={title} {...props} />} />
      </Switch>
      <HeaderDesktop />
    </Aux>
  );

export default Header;
