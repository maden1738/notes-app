import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
       apiKey: "AIzaSyA6Xp_tUzfKvS_GCIDCf9keDMypHaZnCmA",
       authDomain: "react-notes-96d22.firebaseapp.com",
       projectId: "react-notes-96d22",
       storageBucket: "react-notes-96d22.appspot.com",
       messagingSenderId: "544106400632",
       appId: "1:544106400632:web:fa81fdbbc73e0b04c0168d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
