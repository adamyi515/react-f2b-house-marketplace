import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAkELh4LYzu70q9EfUKZoUOoqqk02wbEfk",
  authDomain: "house-marketplace-1b222.firebaseapp.com",
  projectId: "house-marketplace-1b222",
  storageBucket: "house-marketplace-1b222.appspot.com",
  messagingSenderId: "208279766215",
  appId: "1:208279766215:web:827ec7a48a7d869630aae2"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();