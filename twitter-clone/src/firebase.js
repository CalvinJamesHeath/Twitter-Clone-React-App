// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "",
    authDomain: "twitter-clone-fda1f.firebaseapp.com",
    databaseURL: "https://twitter-clone-fda1f.firebaseio.com",
    projectId: "twitter-clone-fda1f",
    storageBucket: "twitter-clone-fda1f.appspot.com",
    messagingSenderId: "424865126840",
    appId: "",
    measurementId: ""
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
