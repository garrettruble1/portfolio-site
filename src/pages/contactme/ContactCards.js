import React from 'react';
import './Contact.css';
import EmailIcon from '../../imgs/emailIcon.png';
import GitHubIconBlack from '../../imgs/githubIconBlack.png';
import LinkedInIcon from '../../imgs/linkedin-in-brands.svg';

function ContactCards(props) {
    return(
        <div className={props.cardsVisibility ? 'cardContainer' : 'hidden'}>

            <h3 className='cardHeader'>Other means of contact:</h3>

            <a href='mailto:garrettruble1@gmail.com' className='card'><span className='squareIcon'><img src={EmailIcon} alt="Email Icon" width='26px' /></span>garrettruble1@gmail.com</a>
                        
            <a href='https://www.linkedin.com/in/garrettruble' target='_blank' rel='noopener noreferrer' className='card'><span className='squareIcon'><img src={LinkedInIcon} alt="LinkedIn Icon" width='26px' /></span>My LinkedIn</a>
                        
            <a href='https://github.com/garrettruble1' target='_blank' rel='noopener noreferrer' className='card'><span className='githubIconContainer'><img src={GitHubIconBlack} alt="GitHub Icon" className='githubIcon' /></span>My GitHub</a>

        </div>
    )
}

export default ContactCards;