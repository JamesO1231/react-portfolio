import React from 'react';
import Navbar from '../Navbar';
import Mountains from '../Mountains';
import About from '../About';
import Projects from '../Projects';
import Profiles from '../Profiles';
import Feedback from '../Feedback';

export default function Main() {
    return (
        <div>
            <Navbar padding="20px"/>
            <Mountains/>
            <About/>
            <Projects/>
            <Profiles/>
            <Feedback/>
        </div>
    )
}