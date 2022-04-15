// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDySK7M5y-aFcYBOa_6Stzcv7bFi9OIkJk",
  authDomain: "red-onion-7574e.firebaseapp.com",
  projectId: "red-onion-7574e",
  storageBucket: "red-onion-7574e.appspot.com",
  messagingSenderId: "856090796602",
  appId: "1:856090796602:web:1e7e50dba9e47e813b0b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;