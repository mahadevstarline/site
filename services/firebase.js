// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { Console } from "console";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGzXuv1re9hpOqykP6hDH2qWVMBCtbOJE",
    authDomain: "mahadev-efece.firebaseapp.com",
    projectId: "mahadev-efece",
    storageBucket: "mahadev-efece.appspot.com",
    messagingSenderId: "483675302264",
    appId: "1:483675302264:web:c72b4b367de8817f84c08d",
    measurementId: "G-0907T7GTET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app); 
const database = firebase.database();

onAuthStateChanged(auth, user => {
    if(user!=null){
        console.log('logged in!');
    }
    else{
        console.log('No user');
    }
})