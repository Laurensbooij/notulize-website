import React from 'react';
import styled from 'styled-components';

import SubmitButton from '../Buttons/SubmitButton';

// declare styled components //
const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 4rem 2rem;
`;
const H3 = styled.h3`
  color: #555555;
  font-weight: 500;
  margin: 1rem 0 0 0;
`;
const P = styled.p`
  text-align: center;
  color: #555555;
  height: 4rem;
  max-width: 20rem;
`;
const InputConainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
`;
const Label = styled.label`
  color: #555555;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.5);
  border: none;
  width: 18rem;

  &:focus {
    outline: none;
    box-shadow: 0 1px 12px 0 rgba(0,0,0,0.5);
    transition: all 0.3s ease-in-out;
  }
`;
const MsgTextarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.5);
  border: none;
  width: 28rem;
  height: 11rem;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 1px 12px 0 rgba(0,0,0,0.5);
    transition: all 0.3s ease-in-out;
  }
`;

// declare main component //
const QuestionForm = props => (
  <Section>
    <H3>Nog vragen?</H3>
    <P>Wij willen u graag helpen met vragen over veiligheid of andere zaken. Laat hier onder een bericht achter!</P>
    <form>
      <InputConainer>
        <Label for="name">Naam</Label>
        <Input id="name" type="text" name="name" required />
      </InputConainer>
      <InputConainer>
        <Label for="email">E-mail adres</Label>
        <Input id="email" type="text" name="emailaddress" required />
      </InputConainer>
      <InputConainer>
        <Label for="message">Bericht</Label>
        <MsgTextarea id="message" type="text" name="msg" placeholder="Laat hier je bericht achter..." required />
      </InputConainer>
      <SubmitButton />
    </form>
  </Section>
);

export default QuestionForm;
