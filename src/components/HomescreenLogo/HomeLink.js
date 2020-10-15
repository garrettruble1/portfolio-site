import React from 'react';
import { Link } from 'react-router-dom';
import './HomeLink.css';
import Wordmark from '../../imgs/LunasWordmarkLogo.png';

function HomeLink () {
    return(
        <div className="linkContainer">
            <Link to="/"><img src={Wordmark} alt="Lunas" className="logoLink" /></Link>
        </div>
    )
}

export default HomeLink;