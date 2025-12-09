// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd1Nyy2WIj9grVPyrhwIwfZ6W-n8yyFhI",
  authDomain: "skill-lab-6.firebaseapp.com",
  projectId: "skill-lab-6",
  storageBucket: "skill-lab-6.firebasestorage.app",
  messagingSenderId: "351909257059",
  appId: "1:351909257059:web:c6df8423581d39b3333d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)