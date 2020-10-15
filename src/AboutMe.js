import React from 'react';
import Logo from './imgs/LunasCircleLogo.png';
import { withRouter } from 'react-router-dom';

function AboutMe() {
    return (
        <div className='placeholderLayout'>
            <img src={ Logo } alt="Lunas Logo" className='logoPlaceholder' />
        </div>
    )
}

export default withRouter(AboutMe);