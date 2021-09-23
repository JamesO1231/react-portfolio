import React from 'react';
import { Navbar, Container, Brand, Nav, Link } from 'react-bootstrap';

export default function Appbar () {
  
return (
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">James Odell</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="../../Main">Home</Nav.Link>
      <Nav.Link href="#features">Contact Me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)};