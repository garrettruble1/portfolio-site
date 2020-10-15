import React from 'react';
import Logo from '../src/imgs/LunasCircleLogo.png';
import { withRouter } from 'react-router-dom';

function Resume () {
    return(
        <div className='placeholderLayout'>
            <img src={ Logo } alt="Lunas Logo" className='logoPlaceholder' />
        </div>
    )
}

export default withRouter(Resume);