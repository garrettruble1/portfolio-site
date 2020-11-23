import React from 'react';
import styled from 'styled-components';
import PhotoshopIcon from '../../../imgs/skillIcons/photoshopIcon.png';
import IllustratorIcon from '../../../imgs/skillIcons/illustratorIcon.png';
import AfterEffectsIcon from '../../../imgs/skillIcons/aftereffectsIcon.png';
import FigmaIcon from '../../../imgs/skillIcons/figmaIcon.png';
import HtmlIcon from '../../../imgs/skillIcons/htmlIcon.png';
import CssIcon from '../../../imgs/skillIcons/cssIcon.png';
import JavascriptIcon from '../../../imgs/skillIcons/javascriptIcon.png';
import GithubIcon from '../../../imgs/skillIcons/githubIcon.png';
import ReactIcon from '../../../imgs/skillIcons/reactIcon.png';
import LunasCard from '../../../imgs/lunasCard.png';

function SkillChip(props) {

    let icon;
    let text;

        switch(props.skill) {
            case 'ps':
                icon = PhotoshopIcon;
                text = "PHOTOSHOP";
                break;
            case 'ai':
                icon = IllustratorIcon;
                text = "ILLUSTRATOR";
                break;
            case 'ae':
                icon = AfterEffectsIcon;
                text = "AFTER EFFECTS";
                break;
            case 'figma':
                icon = FigmaIcon;
                text = "FIGMA";
                break;
            case 'html':
                icon = HtmlIcon;
                text = "HTML";
                break;
            case 'css':
                icon = CssIcon;
                text = "CSS";
                break;
            case 'js':
                icon = JavascriptIcon;
                text = "JAVASCRIPT";
                break;
            case 'git':
                icon = GithubIcon;
                text = "GITHUB";
                break;
            case 'react':
                icon = ReactIcon;
                text = "REACTJS";
                break;
            default:
                icon = LunasCard;
                text = "LUNAS"
        }

    return(
        <SkillChipContainer>
            <SkillChipIcon>
                <img src={icon} alt={text} style={imageStyle} />
            </SkillChipIcon>
            <SkillChipText>
                {text}
            </SkillChipText>
        </SkillChipContainer>
    )
}

let imageStyle = {
    height: 'inherit',
    width: 'inherit',
    opacity: '0.85'
}

const SkillChipContainer = styled.div`
        margin: 12px;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px #AAABAE;
        border-style: solid solid solid none;
        border-radius: 30px 12px 12px 30px;
        @media (max-width: 667px) {
            flex-wrap: 'wrap';
            margin: 4px;
            height: 48px;
        }
    `;

    const SkillChipIcon = styled.div`
        height: 100%;
    `;

    const SkillChipText = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0px 12px;
        font-size: 100%;
        font-weight: 300;
    `;

export default SkillChip;