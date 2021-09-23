import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC3PeOgVAvjKmwYzvpHYss-Qz2_XVixfQA",
    authDomain: "unichat-c2b76.firebaseapp.com",
    projectId: "unichat-c2b76",
    storageBucket: "unichat-c2b76.appspot.com",
    messagingSenderId: "575371071531",
    appId: "1:575371071531:web:f4222a656f6000ffac5a6e",
  })
  .auth();
