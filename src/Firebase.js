// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOzfb8L3D7KvhLoCi2BwVv5CqzA2roCRU",
  authDomain: "vuejs-61da2.firebaseapp.com",
  databaseURL: "https://vuejs-61da2-default-rtdb.firebaseio.com",
  projectId: "vuejs-61da2",
  storageBucket: "vuejs-61da2.appspot.com",
  messagingSenderId: "981325425081",
  appId: "1:981325425081:web:f1ba92f075f29a6f47ee68",
  measurementId: "G-TCXHVYPTBN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = firebase.firestore();

export default firebase;
