import React from 'react';
import { Container } from './styles';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/contact">
        <a>Contact</a>
      </Link>
      <Link to="/about">
        <a>About</a>
      </Link>
    </Container>
  );
}

export default Navbar;