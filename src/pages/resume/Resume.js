import React from 'react';
import { withRouter } from 'react-router-dom';
import './Resume.css';
import Header from '../../components/header/Header.js';
import ResumeImage1 from '../../imgs/RubleResume.png';
import ResumeImage2 from '../../imgs/RubleResume2.png'
import LinkedInIcon from '../../imgs/linkedin-in-brands.svg';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resume1: 'resumeContainer1',
            resume2: 'resumeContainer2'
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        setTimeout(() => {
            this.setState({
                resume1: 'resumeContainer1 contentFadeIn',
                resume2: 'resumeContainer2 contentFadeIn'
            });
        }, 200)
    }

    render() {
        return(
            <div className='contentContainer'>
                <Header pageTitle='Resume' />
                <div className='resumeBackground'></div>

                <div className='content'>
                    <div className={this.state.resume1}>
                        <img src={ResumeImage1} alt="Resume" className='resume' />
                    </div>
                    <div className={this.state.resume2}>
                        <img src={ResumeImage2} alt="Resume" className='resume' />
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