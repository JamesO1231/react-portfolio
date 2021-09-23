import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../images/background.png';
import Navbar from './Navbar';
import Mountains from './Mountains';
import About from './About';
import Footer from './Footer';

const useStyles = makeStyles({
    main: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
});

export default function Main() {
    const classes = useStyles();
    return (
        <>
        <div className="main"></div>
        <div>
            <Navbar padding="20px"/>
            <Mountains/>
            <About/>
            <Footer/>
        </div>
        </>
    )
}