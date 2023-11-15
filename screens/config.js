import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig ={
  apiKey: "AIzaSyDAuytpFD5ggFbkjyZKlDPfq8e9Sz_pgmQ",
  authDomain: "itgo-2421d.firebaseapp.com",
  projectId: "itgo-2421d",
  storageBucket: "itgo-2421d.appspot.com",
  messagingSenderId: "1025072562785",
  appId: "1:1025072562785:web:37693fc7df17b6c55ee020",
  measurementId: "G-4MBLLWG60Z"
}

if(!firebase.apps.length){
    console.log("firebaseConfig",firebaseConfig)
    firebase.initializeApp(firebaseConfig);
}