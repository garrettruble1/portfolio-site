import React from 'react';
import './Footer.css';
import Wordmark from '../../imgs/LunasWordmarkLogo.png';

function Footer () {
    return(
        <footer className='footerContainer'>
            <div className='copyrightElement'>
                <span>Copyright © 2020</span>
                <img src={Wordmark} alt='Lunas' className='footerLogo' />
                <span>Design</span>
            </div>
            <div className='linkElement'>
                <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer' className='linkTag'>
                    <span className="footerIcons"></span>
                    <span className="iconText">Made with ReactJS</span>
                </a>
            </div>
            <div className="linkElementCircle">
                <a href='https://github.com/garrettruble1' target='_blank' rel='noopener noreferrer' className='linkTag'>
                    <span className='footerIconsCircle'></span>
                    <span className='iconText'>View my GitHub</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer;