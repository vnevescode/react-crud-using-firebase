import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDPRpIFGHqZnxPgVHmNttUHk35WZpeklbE",
    authDomain: "react-app-crud-22d95.firebaseapp.com",
    projectId: "react-app-crud-22d95",
    storageBucket: "react-app-crud-22d95.appspot.com",
    messagingSenderId: "461364044710",
    appId: "1:461364044710:web:2a1ae3f65f793de1ede567",
    measurementId: "G-2FKET1RT1H",
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

