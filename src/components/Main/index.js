import React from 'react';
import Navbar from '../Navbar';
import Mountains from '../Mountains';
import About from '../About';
import Projects from '../Projects';
import Profiles from '../Profiles';
import Feedback from '../Feedback';
import { Divider } from '@material-ui/core';

export default function Main() {
    return (
        <div>
            <Navbar/>
            <Divider/>
            <Mountains/>
            <Divider/>
            <About/>
            <Divider/>
            <Projects/>
            <Divider/>
            <Profiles/>
            <Divider/>
            <Feedback/>
        </div>
    )
}