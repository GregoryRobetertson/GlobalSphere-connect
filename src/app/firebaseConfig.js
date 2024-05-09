// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

export const provider = new GoogleAuthProvider();
provider.setCustomParameters( {
  redirect_uri: 'https://miniature-space-cod-7v9gv45rgpwj3pjpw-3000.app.github.dev'
})
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDg67zDCkDJBtd_7sEPJqKbFNS_3FF9r_k",
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
