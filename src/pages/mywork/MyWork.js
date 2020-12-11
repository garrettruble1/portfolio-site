import React from 'react';
import { withRouter } from 'react-router-dom';
import './MyWork.css';
import Header from '../../components/header/Header.js';
import CodePortfolio from './CodePortfolio.js';
import CreativePortfolio from './CreativePortfolio.js';
import Project from './portfolioComponents/Project.js';
import CodeIcon from '../../imgs/codeIcon.png';
import CreativeIcon from '../../imgs/creativeIcon.png';
import WhiteStar from '../../imgs/LunasStarWhite.png';


class MyWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioToggle: true,
            codeVisible: 'codeContainer contentIn',
            creativeVisible: 'hidden',
            portfolioBackground: 'hidden',
            codeProjects: CodePortfolio,
            creativeProjects: CreativePortfolio,
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

        this.setState({
            portfolioToggle: true,
            codeVisible: 'hidden',
            creativeVisible: 'creativeContainer contentOut',
            portfolioBackground: 'creativeBackground backgroundFadeOut',
        });

        setTimeout(() => { 
            this.setState({
                codeVisible: 'codeContainer contentIn',
                creativeVisible: 'hidden',
                portfolioBackground: 'codeBackground backgroundFadeIn',
            })
        }, 500);
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
                <div className='portfolioBackground'></div>
                <div className={this.state.portfolioBackground}></div>


                <div className='content'>

                    <div className='portfolioToggle'>
                        <button className={this.state.portfolioToggle ? 'portfolioToggleButton workToggleButtonActive' : 'portfolioToggleButton toggleButtonDisabled'} 
                            onClick={() => this.handleCodeToggle()}>
                                <img src={CodeIcon} alt="Code Portfolio" className='toggleIcons' />
                                <span className='toggleText'><img src={WhiteStar} alt="Decorative star" className='starDecor' />Code Portfolio<img src={WhiteStar} alt="Decorative star" className='starDecor' /></span>
                        </button>

                        <button className={this.state.portfolioToggle ? 'portfolioToggleButton toggleButtonDisabled' : 'portfolioToggleButton workToggleButtonActive'} 
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