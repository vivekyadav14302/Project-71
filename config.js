import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAJwbFdFnVLMtpoY4Z7MVpjBEJ0U0bPy3k",
  authDomain: "e-ride-c71.firebaseapp.com",
  projectId: "e-ride-c71",
  storageBucket: "e-ride-c71.appspot.com",
  messagingSenderId: "283347376621",
  appId: "1:283347376621:web:d4cae26ce2dce7719aefe4",
  measurementId: "G-8RT2T56J74"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
