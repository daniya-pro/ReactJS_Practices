// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";
import { ref } from "@firebase/database";
import { set } from "@firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD42W9D135UGCc-UkwUJDYvqPjledGGQQ",
  authDomain: "todo-app-eb99c.firebaseapp.com",
  projectId: "todo-app-eb99c",
  storageBucket: "todo-app-eb99c.appspot.com",
  messagingSenderId: "802280598612",
  appId: "1:802280598612:web:ee479e495b2b36978b91c1",
  measurementId: "G-XVHL5LCBPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export default app;
