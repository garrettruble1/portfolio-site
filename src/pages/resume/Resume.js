import React from 'react';
import { withRouter } from 'react-router-dom';
import './Resume.css';
import Header from '../../components/header/Header.js';
import ResumeImage from '../../imgs/nov2020Resume.png';
import LinkedInIcon from '../../imgs/linkedin-in-brands.svg';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: 'resumeContainer'
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        setTimeout(() => {
            this.setState({
                resume: 'resumeContainer contentFadeIn'
            });
        }, 200)
    }

    render() {
        return(
            <div className='contentContainer'>
                <Header pageTitle='Resume' />

                <div className='content'>
                    <div className={this.state.resume}>
                        <img src={ResumeImage} alt="Resume" className='resume' />
                    </div>

                    <div className='resumeButtonContainer'>
                        <a href='https://www.linkedin.com/in/garrettruble/' target='_blank' rel='noopener noreferrer' className='linkedInButton'>
                            <div className='inIconContainer'>
                                <img src={LinkedInIcon} alt="Linked In" className='inIcon' />
                            </div>
                            View my LinkedIn!
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Resume);