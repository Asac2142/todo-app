import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {    
    apiKey: "AIzaSyBcysgfaFT4b4eTpbo81gr9uJ6MGlojPvs",
    authDomain: "app-todo-1e5f0.firebaseapp.com",
    databaseURL: "https://app-todo-1e5f0.firebaseio.com",
    projectId: "app-todo-1e5f0",
    storageBucket: "app-todo-1e5f0.appspot.com",
    messagingSenderId: "109216057924",
    appId: "1:109216057924:web:0b5f7219d4dbf53ab30a11",
    measurementId: "G-KSZCV594CX"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const dateCreated = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                dateCreated,
                ...additionalData
            });

        } catch (error) {
            console.log('Error creating user!', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
