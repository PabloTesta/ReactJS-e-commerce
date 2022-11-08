// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: "e-commerce-kiosko",
  storageBucket: "e-commerce-kiosko.appspot.com",
  messagingSenderId: "106361383308",
  appId: "1:106361383308:web:36e7d010112cb655e14ea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app
