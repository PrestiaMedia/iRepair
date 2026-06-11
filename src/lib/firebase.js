import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCR62I_eg3rBru6YQPePx4iz6hWLHprVCE",
  authDomain: "irepair-1f9dc.firebaseapp.com",
  projectId: "irepair-1f9dc",
  storageBucket: "irepair-1f9dc.firebasestorage.app",
  messagingSenderId: "1070549864917",
  appId: "1:1070549864917:web:88bb6776803230feeaad5c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
