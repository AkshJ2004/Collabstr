import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxjD0NmRAc_08WByDnmQH401oQkGydIeE",
    authDomain: "collabstr-clone-fb0e9.firebaseapp.com",
    projectId: "collabstr-clone-fb0e9",
    storageBucket: "collabstr-clone-fb0e9.firebasestorage.app",
    messagingSenderId: "28038358746",
    appId: "1:28038358746:web:3cceda8c533d23a0eb67e3",
    measurementId: "G-DJ5V3LZT0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Auth providers
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');

export default app;
