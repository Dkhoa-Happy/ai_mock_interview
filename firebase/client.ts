import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRpctfEZIS_uy-QBynyUCTYdOz6xWyeUQ",
  authDomain: "prepwise-98b5c.firebaseapp.com",
  projectId: "prepwise-98b5c",
  storageBucket: "prepwise-98b5c.firebasestorage.app",
  messagingSenderId: "19359857669",
  appId: "1:19359857669:web:00fee3f2355c017ba6306c",
  measurementId: "G-XM15SNY1JW",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
