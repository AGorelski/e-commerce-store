// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt1qOX3mk9XLNmkNdG5G4Ehd9Gg7h1sMU",
  authDomain: "e-commerce-store-373ca.firebaseapp.com",
  projectId: "e-commerce-store-373ca",
  storageBucket: "e-commerce-store-373ca.appspot.com",
  messagingSenderId: "675080463179",
  appId: "1:675080463179:web:27162bd36c96cc1f01bece",
  measurementId: "G-F2F7L2K0EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);