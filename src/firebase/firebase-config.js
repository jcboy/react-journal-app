import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX1bBykRlNDXYJPXVSTx7DeexmzEZmewU",
    authDomain: "react-projects-82eba.firebaseapp.com",
    projectId: "react-projects-82eba",
    storageBucket: "react-projects-82eba.appspot.com",
    messagingSenderId: "51688161665",
    appId: "1:51688161665:web:6f525fcbb9491d1ecce880"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Référence à firestore
const db = firebase.firestore();
// creation auth provider
const googleAuthProvider = new firebase.GoogleAuthProvider();

