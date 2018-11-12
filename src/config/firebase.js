import firebase from "firebase/app";
import "firebase/database";
export const DB_CONFIG = {
  apiKey: "AIzaSyCCyC644Av03QzhAYk8uUu6ev2G5qyk_Xw",
  authDomain: "single-page-app-d9146.firebaseapp.com",
  databaseURL: "https://single-page-app-d9146.firebaseio.com",
  projectId: "single-page-app-d9146",
  storageBucket: "single-page-app-d9146.appspot.com",
  messagingSenderId: "750827197469"
};

firebase.initializeApp(DB_CONFIG);
const databaseRef = firebase.database().ref();
export const commentsRef = databaseRef.child("comments");

