import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Button } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { send } from 'emailjs-com';

const useStyles = makeStyles({
  header:{
    padding: 20,
    textAlign: 'center'
  },
});

export default function ContactFrom () {
  const classes = useStyles();

  const email = "jpodell21@gmail.com"

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    const USER_ID = process.env.REACT_APP_USER_ID;
    const TEMP_ID = process.env.REACT_APP_TEMP_ID;
    const SERVER_ID = process.env.REACT_APP_SERVICE_ID;
    e.preventDefault();
    send(
      SERVER_ID,
      TEMP_ID,
      {to_name: email, ...toSend},
      USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.clear();
  // }

  return (
    <CssBaseline>
    <Container maxWidth='md'>
      <h3 className={classes.header}>Please feel free to give me your feedback!</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Bilbo Baggins" name='from_name' value={toSend.from_name}
    onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='reply_to' placeholder="Frodo@TheShire.com" value={toSend.reply_to}
    onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" name='message' rows={3} value={toSend.message}
    onChange={handleChange} />
      </Form.Group>
      <Button type='submit' variant="secondary" size="md">Submit</Button>
    </Form>
    </Container>
    </CssBaseline>
  )
};