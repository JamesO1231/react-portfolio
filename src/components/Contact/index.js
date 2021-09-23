import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import Feedback from './Feedback';
import Footer from './Footer';

export default function Main() {
    return (
        <>
        <div className="Contact"></div>
        <div>
            <Navbar padding="20px"/>
            <Feedback/>
            <Footer/>
        </div>
        </>
    )
}