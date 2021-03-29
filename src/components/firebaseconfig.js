import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHbphswXX26C6pju5RQ4cYCFAaqtBiXpA",
    authDomain: "waldo-e2dae.firebaseapp.com",
    projectId: "waldo-e2dae",
    storageBucket: "waldo-e2dae.appspot.com",
    messagingSenderId: "826263199620",
    appId: "1:826263199620:web:c92fdf883340a7453f07d1",
    measurementId: "G-0Q2HHPSCSG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();


export default firestore