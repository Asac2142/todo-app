import React from 'react';
import { connect } from 'react-redux';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser }) => {
    console.log('Current user', currentUser);
    return (
        <div className='header'>    
            <span className='logo-title'>TODO 9000</span>                               
            <div className='menu'>
                {
                    currentUser ? 
                    <div className='menu-option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <div className='menu-option' onClick={() => signInWithGoogle()}>SIGN IN</div>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {    
    return {
        currentUser: selectCurrentUser(state)
    }
}

export default connect(mapStateToProps, null)(Header);
