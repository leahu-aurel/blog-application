import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBSfYXE1vx1iWk55ATHaNmdiFqna2c0N4",
  authDomain: "blog-post-12.firebaseapp.com",
  databaseURL: "https://blog-post-12.firebaseio.com",
  projectId: "blog-post-12",
  storageBucket: "blog-post-12.appspot.com",
  messagingSenderId: "733708597030",
  appId: "1:733708597030:web:3a38d3359bd135dda873e7",
  measurementId: "G-CDX0LM6LZ1"
};

firebase.initializeApp(config);
let db = firebase.firestore();

export { db, firebase };
