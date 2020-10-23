import React from 'react';

import './welcome.styles.scss';

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <div className='image'/>
            <h1 className='title'>TODO 9000</h1>
            <div className='description'>
                <div className='info'>
                    <p>Start using our brand new todo list application!</p> 
                    <p>Make your life easier by writting down your tasks.</p>
                    <p>It is really easy to use!</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;