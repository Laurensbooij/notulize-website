import React, { Component } from 'react';
import styled from 'styled-components';

import FaqItem from './FaqItem/FaqItem';


// declare styled components
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 4rem 2rem;`;

const FaqContainer = styled.div`
  width: 90vw;
  max-width: 45rem;

  @media (min-width: 550px) {
    width: 60vw;
  }
  `;



// declare main component
class Faq extends Component {

  state = {
    questionsState: [false, false, false, false]
  }

  showQuestionHandler = questionNr => {
    let updateState = {...this.state};

    updateState.questionsState[questionNr - 1] = !updateState.questionsState[questionNr - 1];

    this.setState(updateState);
  };
  render () {
    console.log(this.state);
    return(
      <Section>
        <FaqContainer>
          <FaqItem
            show={this.state.questionsState[0]}
            showQuestionHandler={() => this.showQuestionHandler(1)}
            question='Wat wordt er met mijn bestanden gedaan?'
            text='We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.'
          />
          <FaqItem
            show={this.state.questionsState[1]}
            showQuestionHandler={() => this.showQuestionHandler(2)}
            question='Wat wordt er met mijn bestanden gedaan?'
            text='We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.'
          />
          <FaqItem
            show={this.state.questionsState[2]}
            showQuestionHandler={() => this.showQuestionHandler(3)}
            question='Wat wordt er met mijn bestanden gedaan?'
            text='We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.'
          />
          <FaqItem
            show={this.state.questionsState[3]}
            showQuestionHandler={() => this.showQuestionHandler(4)}
            question='Wat wordt er met mijn bestanden gedaan?'
            text='We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.We transcriberen alle bestanden. dit wordt test gedaan door onze gewaklificeerde schrijvers test en test allemaal test hutsss an niffauw.'
          />
        </FaqContainer>
      </Section>
    );
  }
};

export default Faq;
