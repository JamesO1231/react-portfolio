import React from 'react';
import Navbar from '../Navbar';
import Mountains from '../Mountains';
import About from '../About';
import Feedback from '../Feedback';
import Footer from '../Footer';

export default function Main() {
    return (
        <div>
            <Navbar padding="20px"/>
            <Mountains/>
            <About/>
            <Footer/>
        </div>
    )
}