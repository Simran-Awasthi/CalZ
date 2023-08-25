// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApYytUR1rEd5b-Z25QGqu4TvjqZpgttIw",
  authDomain: "calculator-d367c.firebaseapp.com",
  projectId: "calculator-d367c",
  storageBucket: "calculator-d367c.appspot.com",
  messagingSenderId: "8295667776",
  appId: "1:8295667776:web:2b38713e7487999122e7a5",
  measurementId: "G-1NPFX5HNH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db =getFirestore(app)
const googleProvider = new GoogleAuthProvider()
export { auth, googleProvider, db };
