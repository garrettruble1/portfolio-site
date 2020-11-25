import React from 'react';
import './Project.css';
import styled from 'styled-components';
import ConsoleCarousel from './ConsoleCarousel';
import BlackStar from '../../../imgs/LunasStarBlack.png';
import Tabs from './Tabs.js';
import SkillChip from './SkillChip.js';
import LinkChip from './LinkChip.js';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleVisibility: 'projectContainer',
            skills: this.props.skills,
        }
    }

    openClick = () => {
        this.setState({
            consoleVisibility: 'projectContainer openConsole'
        })
    }

    exitClick = () => {
        setTimeout(() => {
            this.setState({
                consoleVisibility: 'hidden'
            });
        }, 600)
        this.setState({
            consoleVisibility: 'projectContainer closeConsole'
        });
    }

    render() {

        const CardTitle = styled.div`
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: flex-end;
            height: 45%;
            width: 100%;
            padding: 24px;
            background: linear-gradient(to top, rgba(16, 16, 16, 0.7) 10%, rgba(16, 16, 16, 0) 100%);
            transition: 0.3s;
        `;

        const CardImage = styled.span`
            height: 340px;
            width: 340px;
            background-image: url(${this.props.cardImage});
            background-size: 100% 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        `;

        const ProjectCard = styled.div`
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 40px;
            width: 200px;
            height: 300px;
            border-radius: 32px;
            transition: 0.3s;
            font-family: 'Raleway', sans-serif;
            font-size: 140%;
            font-weight: 600;
            color: #DDDFE2;
            transition: 0.3s;
            &:hover {
                ${CardTitle} {
                    height: 55%;
                    background: linear-gradient(to top, rgba(16, 16, 16, 0.8) 20%, rgba(16, 16, 16, 0) 100%);
                    padding: 32px;
                    font-size: 150%;
                    transition: 0.3s;
                }
                margin: 0px 30px;
                width: 220px;
                height: 340px;
                cursor: pointer;
                transition: 0.3s;
            }
        `;

        return(
            <div key={this.props.id} style={{position: 'relative'}}>

                <ProjectCard onClick={() => this.openClick()}>
                    <CardImage></CardImage>
                    <CardTitle>
                        {this.props.title}
                    </CardTitle>
                </ProjectCard>

                <div className={this.state.consoleVisibility}>

                    <div className='projectConsole'>
                        <button onClick={() => this.exitClick()} className='closeConsoleIcon'>
                            <span></span>
                            <span></span>
                        </button>

                        <ConsoleCarousel previewImages={this.props.previewImages}/>

                        <div className='consoleInfo'>

                            <div className='consoleHeaderTile'>
                                <img src={BlackStar} alt="Decorative star" className='consoleStarDecor' />
                                <h3 className='consoleTitle'>
                                    {this.props.title}
                                </h3>
                                <img src={BlackStar} alt="Decorative star" className='consoleStarDecor' />

                                <span className='consoleMedium'>{this.props.medium}</span>
                            </div>

                            <Tabs>
                                <div label='DESCRIPTION'>
                                    {this.props.description}
                                </div>

                                <div label='SKILLS'>
                                    {this.state.skills.map((skill) => {

                                        return(
                                            <SkillChip key={skill} skill={skill} />
                                        );

                                    })}
                                </div>

                                <div label='LINKS'>
                                    {this.props.links.map((link) => {

                                        return(

                                            <LinkChip key={link.destination} linkObject={link} />

                                        );

                                    })}
                                </div>
                            </Tabs>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Project;