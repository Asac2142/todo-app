import React from 'react';
import { connect } from 'react-redux';

import UserPresentation from '../user-presentation/user-presentation.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './welcome.styles.scss';

const Welcome = ({currentUser}) => {
    return (
        !currentUser ? 
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
        </div> :        
        <UserPresentation />
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state)
    }
}

export default connect(mapStateToProps, null)(Welcome);
