// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe4frsJfQA1ay9VozRzakn4t3GexPmp74",
  authDomain: "myelerningapp.firebaseapp.com",
  projectId: "myelerningapp",
  storageBucket: "myelerningapp.appspot.com",
  messagingSenderId: "482322219321",
  appId: "1:482322219321:web:a4c4bc7cb5c7746ad2a8e8",
  measurementId: "G-J6EXKBWTDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

