import React from 'react';
import { Navbar, Container, Brand, Nav, Link } from 'react-bootstrap';

export default function Appbar () {
  
return (
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>James Odell</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Profile">Projects/Profiles</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)};