import React from 'react';
import Navbar from '../Navbar'
import Title from "../Title";
import { Container } from './styles';

function About() {
  return (
      <Container>
        <Navbar/>
        <Title>
          ABOUT
        </Title>
      </Container>
  );
}

export default About;