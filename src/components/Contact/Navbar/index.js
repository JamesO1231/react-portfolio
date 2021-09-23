import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';

export default function Appbar () {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>James Odell</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Profile">Projects/Profiles</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
)};