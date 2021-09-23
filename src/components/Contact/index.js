import React from 'react';
import Navbar from './Navbar';
import Feedback from './Feedback';
import Footer from './Footer';

export default function Main() {
    return (
        <div>
            <Navbar padding="20px"/>
            <Feedback/>
            <Footer/>
        </div>
    )
}