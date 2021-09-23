import React from 'react';
import Navbar from './Navbar';
import Mountains from './Mountains';
import About from './About';
import Footer from './Footer';

export default function Main() {
    return (
        <>
        <div className="Main"></div>
        <div>
            <Navbar padding="20px"/>
            <Mountains/>
            <About/>
            <Footer/>
        </div>
        </>
    )
}