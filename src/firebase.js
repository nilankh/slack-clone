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
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  // Initialize google Provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  // Ask user to select gmail account in a new popup window

  auth.signInWithPopup(googleProvider);
};
export const signOut = () => {
  auth.signOut();
}

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error);
    }
  }
  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.log('Error in getUserDocument', error.message);
  }
}
