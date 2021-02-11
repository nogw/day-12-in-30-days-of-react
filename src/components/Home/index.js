import React from 'react';
import Navbar from '../Navbar'
import Title from "../Title";
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Navbar/>
      <Title>
        HOME
      </Title>
    </Container>
  );
}

export default Home;