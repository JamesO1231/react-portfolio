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
    padding: 10,
    textDecoration: 'underline'
  },
  about: {
    padding: 5,
  }
});

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
      <div>
        <h2 className={classes.header}>About Me</h2>
        <p className={classes.about}> 
            My name is James Odell. I am a 33 year old male who was born and raised in Denver, Colorado. I
            have had the opportunity of working in multiple industries throughout my professional career. My first
            career was in the culinary arts as a sous chef. My second career has been in the Oil and Gas industry. I am
            naturally a creative person. So, working in Oil and Gas has not been fulfilling for my creative side. I
            would like to get back into an industry that can fulfill that creative desire of mine. I am currently
            attending Denver University's, Coding Bootcamp. Some of the project you will see on this page are from
            my time in that Bootcamp program. I hope you enjoy my work and please feel free to contact me down
            below. 
        </p>
        <div className='row' padding={10} spacing={1}>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={react} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={mongo} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={mysql} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={github} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={jquery} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={node} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={bootstrap} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={css} height="100px" width="100px"/></div>
            <div className="col-4"><img className="bg-white p-1 m-1 transform" src={javascript} height="100px" width="100px"/></div>
        </div>
      </div>
    </Container>
    </React.Fragment>
  );
}