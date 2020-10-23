import React from 'react';
import { connect } from 'react-redux';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser }) => {    
    return (
        <div className='header'>    
            <div className='logo-title'>
                <div className='logo'></div>
                <p>TODO 9000</p>
            </div>
            <div className='menu'>
                {
                    currentUser ? 
                    <div className='sign-out' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <div className='sign-in' onClick={() => signInWithGoogle()}>SIGN IN</div>
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
