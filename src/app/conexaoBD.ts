import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRB9HnUir7lpDT0Yd0id-z0n8UW4Y2k6M",
    authDomain: "blue-cd0db.firebaseapp.com",
    projectId: "blue-cd0db",
    storageBucket: "blue-cd0db.firebasestorage.app",
    messagingSenderId: "59324171949",
    appId: "1:59324171949:web:553c302c396a97eb8fe824",
    measurementId: "G-P5HWCD2T8K"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };