import React from 'react';
import { withRouter } from 'react-router-dom';
import './MyWork.css';
import { nanoid } from 'nanoid';
import LunasCard from '../../imgs/lunasCard.png';
import Header from '../../components/header/Header.js';
import Project from './portfolioComponents/Project.js';
import CodeIcon from '../../imgs/codeIcon.png';
import CreativeIcon from '../../imgs/creativeIcon.png';
import WhiteStar from '../../imgs/LunasStarWhite.png';
import TestImage1 from '../../imgs/2019CoralPortrait.jpg';
import TestImage2 from '../../imgs/RomonaFlowers.png';
import TestImage3 from '../../imgs/lunasCard.png';

class MyWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioToggle: true,
            codeVisible: 'codeContainer contentIn',
            creativeVisible: 'hidden',
            portfolioBackground: 'hidden',
            codeProjects: [
                {
                    id: nanoid(),
                    cardImage: LunasCard,
                    previewImages: [
                        {
                            label: "Test Label 1",
                            image: TestImage3
                        },
                        {
                            label: "Longer Test Label Number Two",
                            image: TestImage2
                        },
                    ],
                    title: "Lunas",
                    medium: "Website",
                    description: "Here's a longer test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    skills: ["ps", "ai", "ae"],
                    links: [
                        {
                            site: "yt",
                            text: "View Project on YouTube",
                            destination: "https://www.youtube.com/"
                        },
                        {
                            site: "vm",
                            text: "View Project on Vimeo",
                            destination: "https://www.vimeo.com/"
                        },
                        {
                            site: "git",
                            text: "View Project on GitHub",
                            destination: "https://www.github.com/"
                        },
                        {
                            site: "cp",
                            text: "View Project on CodePen",
                            destination: "https://www.codepen.io/"
                        },
                    ]
                },
                {
                    id: nanoid(),
                    cardImage: TestImage1,
                    previewImages: [TestImage1],
                    title: "Self Portrait",
                    medium: "Digital Illustration",
                    description: "A self portrait, created using blah blah blah blah",
                    skills: [],
                    links: []
                },
                {
                    id: nanoid(),
                    cardImage: TestImage2,
                    previewImages: [TestImage2],
                    title: "Ramona Flowers",
                    medium: "Digital Illustration",
                    description: "A portrait of Ramona Flowers from the movie Scott Pilgrim Vs. The World...",
                    skills: [],
                    links: []
                },
            ],
            creativeProjects: [
                {
                    id: nanoid(),
                    cardImage: LunasCard,
                    previewImages: [TestImage1],
                    title: "Lunas",
                    medium: "Website",
                    description: "",
                    skills: [],
                    links: []
                },
            ],
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        setTimeout(() => {
            this.setState({
                portfolioBackground: 'codeBackground backgroundFadeIn'
            });
        }, 200)
        
    }

    handleCodeToggle = () => {

        setTimeout(() => { 
            this.setState({
                codeVisible: 'codeContainer contentIn',
                creativeVisible: 'hidden',
                portfolioBackground: 'codeBackground backgroundFadeIn',
            })
        }, 500);

        this.setState({
            portfolioToggle: true,
            codeVisible: 'hidden',
            creativeVisible: 'creativeContainer contentOut',
            portfolioBackground: 'creativeBackground backgroundFadeOut',
        });
    }

    handleCreativeToggle = () => {

        setTimeout(() => {
            this.setState({
                codeVisible: 'hidden',
                creativeVisible: 'creativeContainer contentIn',
                portfolioBackground: 'creativeBackground backgroundFadeIn',
            })
        }, 500)

        this.setState({
            portfolioToggle: false,
            codeVisible: 'codeContainer contentOut',
            creativeVisible: 'hidden',
            portfolioBackground: 'codeBackground backgroundFadeOut',
        });
    }

    render() {
        return (
            <div className='contentContainer'>
                <Header pageTitle='My Work' />
                <div className={this.state.portfolioBackground}></div>


                <div className='content'>

                    <div className='portfolioToggle'>
                        <button className={this.state.portfolioToggle ? 'portfolioToggleButton toggleButtonActive' : 'portfolioToggleButton toggleButtonDisabled'} 
                            onClick={() => this.handleCodeToggle()}>
                                <img src={CodeIcon} alt="Code Portfolio" className='toggleIcons' />
                                <span className='toggleText'><img src={WhiteStar} alt="Decorative star" className='starDecor' />Code Portfolio<img src={WhiteStar} alt="Decorative star" className='starDecor' /></span>
                        </button>

                        <button className={this.state.portfolioToggle ? 'portfolioToggleButton toggleButtonDisabled' : 'portfolioToggleButton toggleButtonActive'} 
                            onClick={() => this.handleCreativeToggle()}>
                                <img src={CreativeIcon} alt="Creative Portfolio" className='toggleIcons' />
                                <span className='toggleText'><img src={WhiteStar} alt="Decorative star" className='starDecor' />Creative Portfolio<img src={WhiteStar} alt="Decorative star" className='starDecor' /></span>
                        </button>
                    </div>

                    <div className={this.state.codeVisible}>
                        
                        {this.state.codeProjects.map((project) => {
                            return (
                                <Project
                                    key={project.id}
                                    id={project.id} 
                                    cardImage={project.cardImage}
                                    previewImages={project.previewImages}
                                    title={project.title}
                                    medium={project.medium}
                                    description={project.description}
                                    skills={project.skills}
                                    links={project.links}
                                />
                                )
                            })
                        }
                    </div>

                    <div className={this.state.creativeVisible}>

                        {this.state.creativeProjects.map((project) => {
                            return (
                                <Project
                                    key={project.id}
                                    id={project.id} 
                                    cardImage={project.cardImage}
                                    previewImages={project.previewImages}
                                    title={project.title}
                                    medium={project.medium}
                                    description={project.description}
                                    skills={project.skills}
                                    links={project.links}
                                />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(MyWork);