import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {apiKey} from "@env"

export const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "phonevalidation-33f7d.firebaseapp.com",
    projectId: "phonevalidation-33f7d",
    storageBucket: "phonevalidation-33f7d.appspot.com",
    messagingSenderId: "438726475179",
    appId: "1:438726475179:web:fe901c83f486228b7be6ee",
    measurementId: "G-GZ7FWB2ZF0"
};


if(!firebase.apps.length){
    console.log("firebaseConfig",firebaseConfig)
    firebase.initializeApp(firebaseConfig);
}