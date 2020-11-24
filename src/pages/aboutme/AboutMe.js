import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './AboutMe.css';
import Header from '../../components/header/Header.js';
import Selfie from '../../imgs/selfie.JPG';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'hidden',
            pictureFrame: 'pictureFrame',
            introTextRow: 'introTextRow',
            paragraphText: 'paragraphText',
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        setTimeout(() => {
            this.setState({
                background: 'aboutMeBackground backgroundIn'
            })
        }, 200)
        setTimeout(() => {
            this.setState({
                pictureFrame: 'pictureFrame contentFadeIn',
            })
        }, 200)
        setTimeout(() => {
            this.setState({
            introTextRow: 'introTextRow contentFadeIn',
            })
        }, 400)
        setTimeout(() => {
            this.setState({
            paragraphText: 'paragraphText contentFadeIn',
            })
        }, 600)
    }

    componentWillUnmount() {
        this.setState({
            pictureFrame: 'pictureFrame',
            introTextRow: 'introTextRow',
            paragraphText: 'paragraphText',
        })
    }

    render() {
        return (
            <div className='contentContainer'>
                <Header pageTitle='About Me' />
                <div className={this.state.background}></div>

                <div className='content'>
                    <span className={this.state.pictureFrame}>
                        <img src={Selfie} alt="Garrett Ruble" className='selfie' />
                    </span>

                    <span className={this.state.introTextRow}>
                        <h2 className='introText introText1'>Hi! I'm Garrett.</h2>
                        <h2 className='introText'>I'm so glad you're here.</h2>
                    </span>

                    <p className={this.state.paragraphText}>If you want to know about me in an elevator pitch: <br />
                        I’m an artist, a designer, a junior developer, and a young professional eager
                        to expand my personal knowledge base and hone my skillsets. My interests lie at the intersection of visual
                        design, aestheticism, and user experience design.
                    </p>

                    <p className={this.state.paragraphText}>
                        If you want to know more: <br />
                        I love designing things. I love identifying problems and finding the solutions to them that make 
                        life better. I love the wins, the challenges, and the growth in that process, from conception to creation. 
                        I feel most inspired to design solutions that are simple, elegant, and dependable. 
                    </p>

                    <p className={this.state.paragraphText}>
                        Aesthetics play an important role in how I design. I practiced traditional art mediums growing up, 
                        expanding to digital mediums throughout my higher education. As such I have a heavy interest in drawing, 
                        traditional and digital illustration, graphic design, motion graphics, and animation. I was able to put 
                        those interests to work through a lens of User Experience Design. Learning principles such as demographical 
                        research, defining problems, ideating, user testing and iterating app designs allowed me to apply my artistic  
                        skills to understand how shape, contrast, color, movement, and other design elements work together to create
                        visual hierarchy and improve the user experience for whoever is at the end of the pipeline of the design process.
                    </p>

                    <p className={this.state.paragraphText}>
                        My growing skillset in web development gives movement and purpose to my eye for design. Learning 
                        HTML, CSS, JavaScript, and React gave me the first tools to bring my unique intuition and design sense 
                        to the real world in a tangible, interact-able context. I consider myself a junior developer with 
                        a lot still to learn, but everything I've already practiced has invigorated me and I am excited 
                        to continue to learn and grow my skills in web development. I'm eager to contribute to the 
                        evolution of the web into a space that works better for us and with us, so we can continue 
                        to improve our world.
                    </p>

                    <p className={this.state.paragraphText}>
                        Most importantly, I believe my greatest strength to be a beginner's mindset attitude. Beginner's 
                        mindset is defined by Creative Huddle as:
                    </p>

                    <blockquote cite="https://www.creativehuddle.co.uk/how-to-adopt-a-beginners-mindset/" className='quote'>
                        "...a concept from Zen Buddhism called Shoshin: 
                        'having an attitude of openness, eagerness, and lack of preconceptions when 
                        studying a subject, even when studying at an advanced level, just as a 
                        beginner in that subject would.'"
                    </blockquote>

                    <p className={this.state.paragraphText}>
                        I think a beginner's mindset is the most indispensable tool one can have as a designer, and I 
                        consider it my most potent asset to success on any level. It is a disposition of suspending 
                        as much prejudice, bias, assumption, judgement as possible to honestly observe reality. It means we  
                        assess problems as they truly are, not as we may think they are. This is a powerful perspective, 
                        as it promotes increased adaptability, efficiency, experimentation, and exploration of solutions that we 
                        may not otherwise consider when our biases inform our judgement. I believe it is this mindset 
                        that enables me to learn, adapt, grow, and effectively design solutions for a better life.
                    </p>

                    <p className={this.state.paragraphText}>
                        Rather than read about me further, I want to close this by inviting you to look around and 
                        let my work speak for itself. Thank you for being here! I look forward to showing you what I 
                        can do!
                    </p>

                    <div className='buttonContainer'>
                        <Link to='/mywork' className='innerNavButton'>MY WORK</Link>
                        <Link to='/contact' className='innerNavButton'>CONTACT ME</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(AboutMe);