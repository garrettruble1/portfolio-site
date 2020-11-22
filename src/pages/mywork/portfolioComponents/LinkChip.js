import React from 'react';
import styled from 'styled-components';
import LunasCard from '../../../imgs/lunasCard.png';
import YoutubeIcon from '../../../imgs/skillIcons/youtubeLinkIcon.png';
import VimeoIcon from '../../../imgs/skillIcons/vimeoLinkIcon.png';
import GithubWhiteIcon from '../../../imgs/skillIcons/githubIconWhite.png';
import CodepenIcon from '../../../imgs/skillIcons/codepenLinkIcon.png';

function LinkChip(props) {

    let icon;

    switch(props.linkObject.site) {
        case 'yt':
            icon = YoutubeIcon;
            break;
        case 'vm':
            icon = VimeoIcon;
            break;
        case 'git':
            icon = GithubWhiteIcon;
            break;
        case 'cp':
            icon = CodepenIcon;
            break;
        default:
            icon = LunasCard;
    }

    return(
        <LinkChipContainer>
            <a href={props.linkObject.destination} target='_blank' rel='noopener noreferrer' style={projectLinkStyle}>
                <LinkChipIcon>
                    <img src={icon} alt="Icon" style={imageStyle} />
                </LinkChipIcon>
                <LinkChipText>
                    {props.linkObject.text}
                </LinkChipText>
            </a>
        </LinkChipContainer>
    )
}

let projectLinkStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '20px',
    backgroundColor: '#101010',
}

let imageStyle = {
    height: 'inherit',
    width: 'inherit',
}

const LinkChipContainer = styled.div`
        margin: 12px;
        height: 60px;
        border-radius: 20px;
        @media (max-width: 667px) {
            margin: 4px;
            height: 40px;
        }
`;

const LinkChipIcon = styled.div`
    height: 100%;
    padding: 12px;
`;

const LinkChipText = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0px 16px 0px 4px;
        font-size: 100%;
        font-weight: 600;
        color: #DDDFE2;
`;

export default LinkChip;