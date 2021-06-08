import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBtQNxY-DBp6gEs0V3NsVA2R9uZeIaZR0",
    authDomain: "react-slack-clone-a2b4f.firebaseapp.com",
    projectId: "react-slack-clone-a2b4f",
    storageBucket: "react-slack-clone-a2b4f.appspot.com",
    messagingSenderId: "179861856519",
    appId: "1:179861856519:web:340b72f213bd04e77465a2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };