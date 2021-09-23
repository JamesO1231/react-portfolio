import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Button } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  header:{
    padding: 20,
    textAlign: 'center'
  },
});

export default function ContactFrom () {
  const classes = useStyles();
  return (
    <CssBaseline>
    <Container maxWidth='md'>
      <div>
        <h3 className={classes.header}>Please feel free to give me your feedback!</h3>
      </div>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="textarea" placeholder="Bilbo Baggins" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Frodo@TheShire.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="secondary" size="md">Submit</Button>
    </Form>
    </Container>
    </CssBaseline>
  )};