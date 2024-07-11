// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJis2kvYppNIqvWnbP68y9k7Qm5iCnhVc",
  authDomain: "socialnetwork-8c08d.firebaseapp.com",
  projectId: "socialnetwork-8c08d",
  storageBucket: "socialnetwork-8c08d.appspot.com",
  messagingSenderId: "1055163682613",
  appId: "1:1055163682613:web:8082d7864baab768d4867c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();