import React from 'react';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectTodoTasks } from '../../redux/todoList/todoList.selectors';
import Welcome from '../welcome/welcome.component';


import './user-presentation.styles.scss';

const UserPresentation = ({ currentUser, todoList }) => {                
    return (        
        currentUser ? 
        <div className='info-container'>        
            <div className='image'>
                <img src={currentUser.currentUser.photoURL} alt='profile' className='profile'/>
            </div>
            <div className='user-info'>
                <h1>Welcome</h1>
                <h2>{currentUser.currentUser.displayName}</h2>
                <p>You have <span className='task-counter'>{todoList.todoList.length}</span> task(s) for today</p>
            </div>
        </div> : 
        <div className='welcome'>
            <Welcome />
        </div>       
    )
};

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state),
        todoList: selectTodoTasks(state)
    }
};

export default connect(mapStateToProps, null)(UserPresentation);
