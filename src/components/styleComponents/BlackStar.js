import React from 'react';
import styled from 'styled-components';
import BlackStarImg from '../../imgs/LunasStarBlack.png';

function BlackStar(props) {

    const BlackStar = styled.img`
        margin: ${props.space || '20px'};
        height: ${props.size || '20px'};
        width: ${props.size || '20px'};
    `;

    return (
        <BlackStar src={BlackStarImg} />
    )
}

export default BlackStar;