import { nanoid } from 'nanoid';

import PortfolioCard from './projectFiles/portfolioCard.png';
import PortfolioImg1 from './projectFiles/portfolioImg1.gif';
import PortfolioImg2 from './projectFiles/portfolioImg2.png';
import PortfolioImg3 from './projectFiles/portfolioImg3.png';
import PortfolioImg4 from './projectFiles/portfolioImg4.png';
import PortfolioImg5 from './projectFiles/portfolioImg5.png';
import PortfolioImg6 from './projectFiles/portfolioImg6.png';
import PortfolioImg7 from './projectFiles/portfolioImg7.png';

import MindbitesCard from './projectFiles/mindbitesCard.jpg';
import Mindbites1 from './projectFiles/mindbitesScreen1.png';
import Mindbites2 from './projectFiles/mindbitesScreen2.png';
import Mindbites3 from './projectFiles/mindbitesScreen3.png';
import Mindbites4 from './projectFiles/mindbitesScreen4.gif';
import Mindbites5 from './projectFiles/mindbitesScreen5.png';

import GiterdunCard from './projectFiles/giterdunCard.jpg';
import Giterdun1 from './projectFiles/giterdunScreen1.png';
import Giterdun2 from './projectFiles/giterdunScreen2.png';
import Giterdun3 from './projectFiles/giterdunScreen3.png';

import ZenithCard from './projectFiles/zenithCard.jpg';
import Zenith1 from './projectFiles/zenithScreen1.png';
import Zenith2 from './projectFiles/zenithScreen2.png';

import InteractionCard from './projectFiles/interactionCard.jpg';
import InteractionGIF from './projectFiles/interactionPrototypes.gif';

const CodePortfolio = [
    {
        id: nanoid(),
        cardImage: PortfolioCard,
        previewImages: [
            {
                label: "Home Page",
                image: PortfolioImg1
            },
            {
                label: "About Me Page",
                image: PortfolioImg2
            },
            {
                label: "Code Portfolio",
                image: PortfolioImg3
            },
            {
                label: "Creative Portfolio",
                image: PortfolioImg4
            },
            {
                label: "Project Console View (very meta)",
                image: PortfolioImg5
            },
            {
                label: "Resume Page",
                image: PortfolioImg6
            },
            {
                label: "Contact Page",
                image: PortfolioImg7
            },
        ],
        title: "Lunas",
        medium: "ReactJS Portfolio",
        description: "I included a place for this site in this portfolio, but I hope my work speaks for itself. The task of creating a website portfolio has been a daunting task and presented many obstacles along the way. On this side of the project, I feel a swelling sense of pride and accomplishment in what I've created here. Lunas now has a home and place for expression in the web world. I hope you enjoy my work, thank you for being here!",
        skills: ["ps", "ai", "html", "css", "js", "fm", "react", "git"],
        links: [
            {
                site: "git",
                text: "View My Site on GitHub",
                destination: "https://github.com/garrettruble1/portfolio-site"
            },
        ]
    },
    {
        id: nanoid(),
        cardImage: MindbitesCard,
        previewImages: [
            {
                label: "Home Page",
                image: Mindbites1
            },
            {
                label: "Filtered List",
                image: Mindbites2
            },
            {
                label: "Exercise Introduction",
                image: Mindbites3
            },
            {
                label: "Exercise Screen",
                image: Mindbites4
            },
            {
                label: "Finish Screen",
                image: Mindbites5
            },
        ],
        title: "Mindbites",
        medium: "ReactJS App",
        description: "Mindbites is a collaborative project application to build out a fully functioning React application. I worked in a team to put learned React concepts to a more comprehensive use in designing and building a fully functioning application over a month. Our goal was to build an app that put 2 minute long ('bite-sized') mindfulness exercises with the user's reach. The team divided our time over the weeks to do user experience research, design, and build and debug our application. As with any teamwork, unforseen bumps and obstacles were a part of our journey, and the application isn't as fully fleshed out as I would like. But I still feel proud of the goals we were able to meet and the finished application we turned in.",
        skills: ["html", "css", "js", "react", "git"],
        links: [
            {
                site: "git",
                text: "View Project on GitHub",
                destination: "https://github.com/elizanort/capstone"
            },
        ]
    },
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
        skills: ["html", "css", "js", "react", "git", "ai"],
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
        skills: ["html", "css", "js", "react", "git", "ai"],
        links: [
            {
                site: "git",
                text: "View Project on GitHub",
                destination: "https://github.com/garrettruble1/interaction-prototypes"
            },
        ]
    },
]

export default CodePortfolio;