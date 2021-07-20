import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Aux from './hoc/Aux/Aux';
import Header from './components/Navigation/Header/Header';
import MenuToggle from './components/Navigation/MenuToggle/MenuToggle';
import Footer from './components/Footer/Footer';
import HomePage from './containers/HomePage/HomePage';
import Security from './containers/Security/Security';


//// inject global css via styled-components ////
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  section:nth-of-type(1n) {
    background-color: #EDF2F4;
  }
  section:nth-of-type(2n) {
    background-color: #FAFAFA;
  }
  `;

//// declaring main component ////
class App extends Component {

  state = {
    menuState: false
  }

  menuTogglehandler = () => {
    if (this.state.menuState) {
      this.setState({menuState: false})
    }
    else if (!this.state.menuState) {
      this.setState({menuState: true})
    }
  };

  render() {
    return (
      <Aux>
        <Header title='Homepage'/>
        <MenuToggle
          menuState={this.state.menuState}
          menuToggle={this.menuTogglehandler}
        />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/veiligheid' component={Security}/>
        <Route component={HomePage}/>
      </Switch>
        <Footer/>
      </Aux>
    );
  }
}

export default App;
