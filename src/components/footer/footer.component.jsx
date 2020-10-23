import React from 'react';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>            
            <a href='https://github.com/Asac2142'>
                <div className='github'/>
            </a>            
            <a href='https://www.linkedin.com/in/andresalbancarvallo/'>
                <div className='linkedin'/>
            </a>
            <a href='https://stackoverflow.com/users/2841091/andres2142?tab=profile'>
                <div className='stackoverflow'/>
            </a>            
        </div>
    )
};

export default Footer;
