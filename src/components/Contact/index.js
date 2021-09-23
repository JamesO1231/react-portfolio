import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Feedback from './Feedback';
import Footer from './Footer';

export default function Contact() {
    return (
        <div className="Contact">
            <Navbar padding="20px"/>
            <Feedback/>
            <Footer/>
        </div>
    )
}