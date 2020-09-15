import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCMi4a-jspm5-3X9W_wpRwvwmEwi8KwU60',
  authDomain: 'react-slack-clone-7f081.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-7f081.firebaseio.com',
  projectId: 'react-slack-clone-7f081',
  storageBucket: 'react-slack-clone-7f081.appspot.com',
  messagingSenderId: '744765766816',
  appId: '1:744765766816:web:00c146e52c91a3aea89dc5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
