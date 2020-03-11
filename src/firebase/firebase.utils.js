import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCE_T6VwE8FL0Fr_lZTYayW-AJh3Z9hITM",
        authDomain: "crwn-db-21550.firebaseapp.com",
        databaseURL: "https://crwn-db-21550.firebaseio.com",
        projectId: "crwn-db-21550",
        storageBucket: "crwn-db-21550.appspot.com",
        messagingSenderId: "211384460127",
        appId: "1:211384460127:web:0acf77e4bff1e4c77c4cea",
        measurementId: "G-3SDE2QXVPM"
      };


      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;