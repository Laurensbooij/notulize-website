import React, { Component } from 'react';

import HomePageIntro from '../..//components/HomePageIntro/HomePageIntro';
import Steps from '../../components/Steps/Steps';
import MeetWriter from '../MeetWriter/MeetWriter';
import Benefits from '../../components/Benefits/Benefits';
import Faq from '../../components/Faq/Faq';

class HomePage extends Component {
  render() {
    return (
      <main>
        <HomePageIntro/>
        <Benefits/>
        <MeetWriter/>
        <Steps/>
        <Faq/>
      </main>
    );
  }
}

export default HomePage;
