import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJGo8do9_JL30dyuOfFBpAGlFu1erA3ts",
    authDomain: "netflix-build-72c1f.firebaseapp.com",
    projectId: "netflix-build-72c1f",
    storageBucket: "netflix-build-72c1f.appspot.com",
    messagingSenderId: "999074720611",
    appId: "1:999074720611:web:04b0e2a4b52808f69a4156"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {auth , db};