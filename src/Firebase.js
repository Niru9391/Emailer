
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJ2lbOl8KTt65hw8LVqzopU1mVzndTklQ",
  authDomain: "mailboxer-9f5a6.firebaseapp.com",
  projectId: "mailboxer-9f5a6",
  storageBucket: "mailboxer-9f5a6.firebasestorage.app",
  messagingSenderId: "1029947909523",
  appId: "1:1029947909523:web:ac34a49842872029117466",
  measurementId: "G-VN1DPP94ZR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
export const db= getFirestore(app)
export const provider = new GoogleAuthProvider();