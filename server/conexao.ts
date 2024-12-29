// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRB9HnUir7lpDT0Yd0id-z0n8UW4Y2k6M",
  authDomain: "blue-cd0db.firebaseapp.com",
  projectId: "blue-cd0db",
  storageBucket: "blue-cd0db.firebasestorage.app",
  messagingSenderId: "59324171949",
  appId: "1:59324171949:web:553c302c396a97eb8fe824",
  measurementId: "G-P5HWCD2T8K"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const analytics = getAnalytics(db);

// Para usar Firestore:
export {db};