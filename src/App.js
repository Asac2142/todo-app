import React from 'react';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import Header from './components/header/header.component';

import './App.css';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Header></Header>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
