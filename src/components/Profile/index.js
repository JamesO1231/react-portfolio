import React from 'react';
import Profiles from './Profiles'
import Projects from 'Projects';

export default function Profile() {
    return (
        <div>
            <Navbar padding="20px"/>
            <Profiles/>
            <Projects/>
        </div>
    )
}