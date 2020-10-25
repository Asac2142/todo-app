import React from 'react';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Welcome from './components/welcome/welcome.component';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);
    this.state = {
        height: '100vh'
    };    
  };

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
    this.detectDevice();
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  detectDevice = () => {   
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);    

    if (isMobile) {      
      this.setState({height: '100%'}, () => document.querySelector('.main').style.height = this.state.height);
    } else {
      this.setState({height: '100vh'}, () => document.querySelector('.main').style.height = this.state.height);
    }
  };

  render() {
    return (
      <div className='container'>
        <header className='header'>
          <Header />
        </header>
        <section className='main'>
          <Welcome />
        </section>
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
