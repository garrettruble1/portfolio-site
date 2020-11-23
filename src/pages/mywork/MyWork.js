import React from 'react';
import { withRouter } from 'react-router-dom';
import './MyWork.css';
import { nanoid } from 'nanoid';
import Header from '../../components/header/Header.js';
import Project from './portfolioComponents/Project.js';
import CodeIcon from '../../imgs/codeIcon.png';
import CreativeIcon from '../../imgs/creativeIcon.png';
import WhiteStar from '../../imgs/LunasStarWhite.png';

import GiterdunCard from './projectFiles/giterdunCard.jpg';
import Giterdun1 from './projectFiles/giterdunScreen1.png';
import Giterdun2 from './projectFiles/giterdunScreen2.png';
import Giterdun3 from './projectFiles/giterdunScreen3.png';

import ZenithCard from './projectFiles/zenithCard.jpg';
import Zenith1 from './projectFiles/zenithScreen1.png';
import Zenith2 from './projectFiles/zenithScreen2.png';

import InteractionCard from './projectFiles/interactionCard.jpg';
import InteractionGIF from './projectFiles/interactionPrototypes.gif';

import CycleCard from './projectFiles/cyclePortraitCard.jpg';
import CycleImage from './projectFiles/cyclePortraitImage.jpg';
import CycleRef from './projectFiles/cycleRef.jpg';

import CoralCard from './projectFiles/coralPortraitCard.jpg';
import CoralImage from './projectFiles/coralPortraitImage.jpg';
import CoralImage2 from './projectFiles/coralPortraitDrawing.jpg';
import CoralImage3 from './projectFiles/coralPortraitRef.jpg';

import RamonaCard from './projectFiles/ramonaFlowersCard.png';
import RamonaSeries from './projectFiles/ramonaSeries.gif';
import RamonaImage from './projectFiles/ramonaFlowersImage.png';
import RamonaRef from './projectFiles/ramonaFlowersRef.jpg';


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
                    cardImage: GiterdunCard,
                    previewImages: [
                        {
                            label: "Dashboard",
                            image: Giterdun1
                        },
                        {
                            label: "List Component Screen",
                            image: Giterdun2
                        },
                        {
                            label: "Edit List Item Screen",
                            image: Giterdun3
                        },
                    ],
                    title: "Giterdün",
                    medium: "ReactJS App",
                    description: "Giterdün is a project application to practice React learning goals. I was given this project to complete as an assignment, with the end goal being a functional to-do list application. This project helped me utilize and put together many ReactJS concepts that were learned individually over several weeks, such as state, props, lifecycle methods, controlled components, CSS in Javascript, and Javascript functions to create a fully functioning application. I was also able to create and implement some design assets, such as the logo and other visual styling elements.",
                    skills: ["html", "css", "js", "git", "ai"],
                    links: [
                        {
                            site: "git",
                            text: "View Project on GitHub",
                            destination: "https://github.com/garrettruble1/react-app"
                        },
                    ]
                },
                {
                    id: nanoid(),
                    cardImage: ZenithCard,
                    previewImages: [
                        {
                            label: "Top of Site",
                            image: Zenith1
                        },
                        {
                            label: "Bottom of Site",
                            image: Zenith2
                        },
                    ],
                    title: "Zenith",
                    medium: "Website, CSS Layout",
                    description: "Zenith is a project website to practice CSS layout learning goals. I was provided an image of a mockup of the site, and was instructed to replicate it as precisely and accurately as possible in the format of a real web page. This project helped me comprehend various CSS layout styles, including grid, flexbox, relative positioning, absolute positioning, fixed positioning, margins, padding, and other similar methods.",
                    skills: ["html", "css", "git",],
                    links: [
                        {
                            site: "git",
                            text: "View Project on GitHub",
                            destination: "https://github.com/garrettruble1/zenithmockup"
                        },
                    ]
                },
                {
                    id: nanoid(),
                    cardImage: InteractionCard,
                    previewImages: [
                        {
                            label: "Interaction Demo",
                            image: InteractionGIF
                        },
                    ],
                    title: "User Interaction",
                    medium: "Custom CSS Animation",
                    description: "This is a project demonstrating my abilities in CSS animations. I was instructed to use find interaction animations that inspired me, and use CSS animation techniques to recreate something I liked, or create a custom animated user interactions. The purpose of this project was to think about how implementing animations to a site or application can enhance user experience design, adding elements that not only can help communicate functionality, but also contribute an aspect of design that can be a small surprise for the user.",
                    skills: ["html", "css", "react", "git", "ai"],
                    links: [
                        {
                            site: "git",
                            text: "View Project on GitHub",
                            destination: "https://github.com/garrettruble1/interaction-prototypes"
                        },
                    ]
                },
            ],

            creativeProjects: [
                {
                    id: nanoid(),
                    cardImage: CycleCard,
                    previewImages: [
                        {
                            label: "Self Portrait",
                            image: CycleImage
                        },
                        {
                            label: "Reference Image",
                            image: CycleRef
                        }
                    ],
                    title: "Self Portrait",
                    medium: "Mixed Medium Digital Portrait",
                    description: "This is a self portrait created using a blend of an original photo, and stylized portions created with Photoshop and Illustrator. I created a transparent 'mesh' guide made of triangles on top of the original photo in Photoshop, then used that guide in Illustrator to create and color a full low-poly illustration made up of individual vector triangles to match the original photo. I took this illustration back into Photoshop, and blended it with the original photo, and added brush and other effects to create a blend of the different elements into one another to create a seamless photo.",
                    skills: ["ps", "ai"],
                    links: []
                },
                {
                    id: nanoid(),
                    cardImage: CoralCard,
                    previewImages: [
                        {
                            label: "Finished Digital Portrait",
                            image: CoralImage
                        },
                        {
                            label: "Finished Ink Drawing",
                            image: CoralImage2
                        },
                        {
                            label: "Reference Image",
                            image: CoralImage3
                        },
                    ],
                    title: "Self Portrait",
                    medium: "Mixed Medium Digital Portrait",
                    description: "This is a self portrait created using an ink drawing of an original photo, stylized in Photoshop. I was inspired by the announcement of Pantone's color of the year for 2019 'Living Coral', and wanted to create a portrait that incorporated the color for use on social media. I chose my reference photo and drew it in pencil using a grid system, then used Pigma Micron pens to ink the drawing. I then scanned and imported the drawing to Photoshop, where I modified the background and linework colors to the final image.",
                    skills: ["ps", "pnc", "ink"],
                    links: []
                },
                {
                    id: nanoid(),
                    cardImage: RamonaCard,
                    previewImages: [
                        {
                            label: "Finished Digital Animation",
                            image: RamonaSeries
                        },
                        {
                            label: "Finished Digital Illustration",
                            image: RamonaImage
                        },
                        {
                            label: "Reference Image",
                            image: RamonaRef
                        },
                    ],
                    title: "Ramona Flowers",
                    medium: "Digital Illustration",
                    description: "This is a stylized low-poly portrait of Ramona Flowers from the film Scott Pilgrim VS. The World. 'Low-poly' is short for low polygon count, a visual style intended to look like a rendered 3D model with fewer polygonal faces to make up the object. I create low-poly illustrations by importing my chosen reference into Photoshop, and tracing a transparent mesh guide of triangles over the image. Then I import both into Illustrator, trace and color layers of individual vector triangles to create an illusion of a low-poly 3D render. After the original portrait was done, I went back and created different colored iterations, and used After Effects to create the finished animation.",
                    skills: ["ps", "ai", "ae"],
                    links: [
                        {
                            site: "yt",
                            text: "Watch Movie Trailer",
                            destination: "https://www.youtube.com/watch?v=7wd5KEaOtm4"
                        }
                    ]
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