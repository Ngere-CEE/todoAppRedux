import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyC_UB_JPaLgTeyerD6u1l45-SZfr75D4kI",
    authDomain: "todo-app-redux-fa1fa.firebaseapp.com",
    projectId: "todo-app-redux-fa1fa",
    storageBucket: "todo-app-redux-fa1fa.appspot.com",
    messagingSenderId: "1052953959191",
    appId: "1:1052953959191:web:a0acd233904f54b462f552"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;