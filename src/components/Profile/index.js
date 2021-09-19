import React from 'react';
import Profiles from './Profiles'
import Projects from './Projects';
import Navbar from './Navbar';

export default function Profile() {
    return (
        <div>
            <Navbar padding="20px"/>
            <Projects/>
            <Profiles/>
        </div>
    )
}