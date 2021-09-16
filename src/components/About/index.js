import React from 'react';
import react from '../../images/react.png';
import mongo from '../../images/mongo.png';
import mysql from '../../images/mysql.png';
import github from '../../images/github.png';
import jquery from '../../images/jquery.png';
import node from '../../images/node.png';
import bootstrap from '../../images/bootstrap.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import { Divider } from '@material-ui/core';

export default function SimpleContainer() {
  return (
    <div>
        <p>
            My name is James Odell, and I am a Full Stack Developer. I attended the University of Denver's Coding Bootcamp and I am proficient in the languages below. 
        </p>
        <div className="row" spacing={1}>
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
  );
}