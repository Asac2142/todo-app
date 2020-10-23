import React from 'react';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
//import { selectCurrentUser } from './redux/user/user.selectors';
import Header from './components/header/header.component';
import UserPresentation from './components/user-presentation/user-presentation.component';

import './App.css';
import { setCurrentUser } from './redux/user/user.actions';
import Footer from './components/footer/footer.component';

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
      <div className='container'>
        <Header className='header'/>
        <div className='main'>
          <UserPresentation />
        </div>
        <footer className='footer'>
          <Footer />
        </footer>
      </div>      
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
};

// const mapStateToProps = (state) => {
//   return {
//     currentUser: selectCurrentUser(state)
//   };
// }

export default connect(null, mapDispatchToProps)(App);
