import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDKfPSiGcYppm-d6AlJhp5F8_af0EPSkdE",
  authDomain: "taubatexasscouting.firebaseapp.com",
  projectId: "taubatexasscouting",
  storageBucket: "taubatexasscouting.appspot.com",
  messagingSenderId: "151754090896",
  appId: "1:151754090896:web:3c81a7966130f4dab72b15",
  measurementId: "G-L6B7DKME6H"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);