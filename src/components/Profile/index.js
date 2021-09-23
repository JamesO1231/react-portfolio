import React from 'react';
import './style.css';
import Profiles from './Profiles'
import Projects from './Projects';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Profile() {
    return (
        <div className="Profile">
            <Navbar padding="20px"/>
            <Projects/>
            <Profiles/>
            <Footer/>
        </div>
    )
}