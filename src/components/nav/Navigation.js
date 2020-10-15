import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import NavBurger from './NavBurger.js';
import Wordmark from '../../imgs/LunasWordmarkLogo.png';

function Navigation(props) {
    return (
        <div>
            <NavBurger menuState={props.menuState} menuToggle={props.menuToggle}/>
            
            <nav className={props.menuState ? "navContainer" : "navHidden"} onClick={() => props.menuClose()}>
                <ul className="navList">
                    <li className="navItems"><Link to='/' className="navLinks"><img src={Wordmark} alt="Lunas" className="linkLogo" /></Link></li>
                    <li className="navItems"><Link to='/aboutme' className="navLinks">ABOUT ME</Link></li>
                    <li className="navItems"><Link to='/mywork' className="navLinks">MY WORK</Link></li>
                    <li className="navItems"><Link to='/resume' className="navLinks">RESUME</Link></li>
                    <li className="navItems"><Link to='/contact' className="navLinks">CONTACT ME</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;