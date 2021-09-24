import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import react from '../../../images/react.png';
import mongo from '../../../images/mongo.png';
import mysql from '../../../images/mysql.png';
import github from '../../../images/github.png';
import jquery from '../../../images/jquery.png';
import node from '../../../images/node.png';
import bootstrap from '../../../images/bootstrap.png';
import css from '../../../images/css.png';
import javascript from '../../../images/javascript.png';

const useStyles = makeStyles({
  header: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    textDecoration: 'underline'
  },
  about: {
    color: 'white',
    padding: 5,
  }
});

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
      <>
        <h2 className={classes.header}>About Me</h2>
        <p className={classes.about}> 
            My name is James Odell. I am a 33 year old born and raised in Denver, Colorado. I
            have had the opportunity to work in multiple industries throughout my professional career which has allowed me to aquire many different skills. My first
            career was in the culinary arts as a sous chef. My second career has been in the oil and gas industry. With my company selling and me needing to find something new. 
            I have chosen to get back into a creative industry. I am currently attending the University of Denver Coding Bootcamp. Some of the projects you will see on this page are from
            my time in that bootcamp program. Below are links to the documentation for many of the programming languages I have learned. 
        </p>
        <div className='row' padding={10} spacing={1}>
            <a href='https://reactjs.org/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={react} height="100px" width="100px"/></a>
            <a href='https://www.mongodb.com/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={mongo} height="100px" width="100px"/></a>
            <a href='https://www.mysql.com/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={mysql} height="100px" width="100px"/></a>
            <a href='https://github.com/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={github} height="100px" width="100px"/></a>
            <a href='https://jquery.com/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={jquery} height="100px" width="100px"/></a>
            <a href='https://nodejs.org/en/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={node} height="100px" width="100px"/></a>
            <a href='https://react-bootstrap.github.io/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={bootstrap} height="100px" width="100px"/></a>
            <a href='https://www.w3schools.com/css/default.asp' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={css} height="100px" width="100px"/></a>
            <a href='https://www.javascript.com/' target="_blank" className="col-4"><img className="bg-white p-1 m-1 transform" src={javascript} height="100px" width="100px"/></a>
        </div>
      </>
    </Container>
    </React.Fragment>
  );
}