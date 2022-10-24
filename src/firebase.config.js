import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAkELh4LYzu70q9EfUKZoUOoqqk02wbEfk",
  authDomain: "house-marketplace-1b222.firebaseapp.com",
  projectId: "house-marketplace-1b222",
  storageBucket: "house-marketplace-1b222.appspot.com",
  messagingSenderId: "208279766215",
  appId: "1:208279766215:web:827ec7a48a7d869630aae2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();