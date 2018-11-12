import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
export const DB_CONFIG = {
  apiKey: "AIzaSyCCyC644Av03QzhAYk8uUu6ev2G5qyk_Xw",
  authDomain: "single-page-app-d9146.firebaseapp.com",
  databaseURL: "https://single-page-app-d9146.firebaseio.com",
  projectId: "single-page-app-d9146",
  storageBucket: "single-page-app-d9146.appspot.com",
  messagingSenderId: "750827197469"
};


firebase.initializeApp(DB_CONFIG);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
export const commentsRef = firestore.collection("posts");

