import React from 'react';
import { withRouter } from 'react-router-dom';
import './AboutMe.css';
import Header from '../../components/header/Header.js';
import Selfie from '../../imgs/selfie.JPG';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureFrame: "pictureFrame",
            introTextRow: "introTextRow",
            elevatorText: "elevatorText",
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                pictureFrame: "pictureFrame contentFadeIn",
            })
        }, 200)
        setTimeout(() => {
            this.setState({
            introTextRow: "introTextRow contentFadeIn",
            })
        }, 400)
        setTimeout(() => {
            this.setState({
            elevatorText: "elevatorText contentFadeIn",
            })
        }, 600)
    }

    componentWillUnmount() {
        this.setState({
            pictureFrame: "pictureFrame",
            introTextRow: "introTextRow",
            elevatorText: "elevatorText",
        })
    }

    render() {
        return (
            <div className="contentContainer">
                <Header pageTitle="About Me" />

                <div className="content">
                    <span className={this.state.pictureFrame}>
                        <img src={Selfie} alt="Garrett Ruble" className="selfie" />
                    </span>

                    <span className={this.state.introTextRow}>
                        <h2 className="introText introText1">Hi! I'm Garrett.</h2>
                        <h2 className="introText">I'm so glad you're here.</h2>
                    </span>

                    <p className={this.state.elevatorText}>If you want to know about me in an elevator pitch:
                        I’m an artist, a designer, a junior developer, and a young professional eager
                        to increase my personal knowledgebase and hone my skillsets. My interests lie at the intersection of visual
                        design, aestheticism, and user experience design.
                    </p>

                    <p className={this.state.elevatorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                         officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        )
    }
}

export default withRouter(AboutMe);