import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyAv6cv9R9xPbHIP9HKsqmcG5lxY0r-sqT0",
  authDomain: "the-light-62b63.firebaseapp.com",
  databaseURL: "https://the-light-62b63.firebaseio.com",
  projectId: "the-light-62b63",
  storageBucket: "the-light-62b63.appspot.com",
  messagingSenderId: "896244626854",
  appId: "1:896244626854:web:4ce3cd33d09c7e690acb67",
  measurementId: "G-XCTKXGJHRT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
