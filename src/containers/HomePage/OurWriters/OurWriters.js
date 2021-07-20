import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import OurWritersMobile from '../../../components/HomePageIntro/OurWriters/OurWritersMobile';
import OurWritersDesk from '../../../components/HomePageIntro/OurWriters/OurWritersDesk';

// declare main component
class OurWriters extends Component {

  state = {
    sliderXpostion: 100,
    activeControl: 1
  }

  sliderControlHandler = (clickedControl) => {
    let xPosition;

    if (clickedControl === 1) {
      xPosition = 100;
    }
    else if (clickedControl === 2) {
      xPosition = 0;
    }
    else if (clickedControl === 3) {
      xPosition = -100;
    }

    this.setState({
      sliderXpostion: xPosition,
      activeControl: clickedControl
    })
  }

  render(){
    return (
      <Aux>
        <OurWritersMobile
          sliderControlHandler={this.sliderControlHandler}
          sliderXpostion={this.state.sliderXpostion}
          activeControl={this.state.activeControl}
        />
        <OurWritersDesk
          sliderControlHandler={this.sliderControlHandler}
          sliderXpostion={this.state.sliderXpostion}
          activeControl={this.state.activeControl}
        />
      </Aux>
    );
  }
}

export default OurWriters;
