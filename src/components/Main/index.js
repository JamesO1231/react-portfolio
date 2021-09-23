import React from 'react';
import './style.css'
import Navbar from './Navbar';
import Mountains from './Mountains';
import About from './About';
import Footer from './Footer';

export default function Main() {
    return (
        <div className="Main">
            <Navbar padding="20px"/>
            <Mountains/>
            <About/>
            <Footer/>
        </div>
    )
}