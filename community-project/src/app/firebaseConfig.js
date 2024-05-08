// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
export const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_KEY",
  authDomain: "community-project-a9b06.firebaseapp.com",
  projectId: "community-project-a9b06",
  storageBucket: "community-project-a9b06.appspot.com",
  messagingSenderId: "234026338553",
  appId: "1:234026338553:web:10525057764050ab023a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
