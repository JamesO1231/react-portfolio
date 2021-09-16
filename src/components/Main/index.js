import React from 'react';
import Navbar from '../Navbar';
import About from '../About';
import Feedback from '../Feedback';
import Mountains from '../Mountains';
import Projects from '../Projects';
import { Divider } from '@material-ui/core';

export default function Main() {
    return (
        <div>
            <Navbar/>
            <Mountains/>
            <About/>
            <Projects/>
            <Feedback/>
        </div>
    )
}