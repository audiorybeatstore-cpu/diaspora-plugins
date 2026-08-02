// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
// (Copy this directly from your Firebase Console Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyCjNAQwJoLMxGOadDeoPv0MOBTd1mbP6OM",
  authDomain: "diaspora-plugins.firebaseapp.com",
  projectId: "diaspora-plugins",
  storageBucket: "diaspora-plugins.firebasestorage.app",
  messagingSenderId: "506717469077",
  appId: "1:506717469077:web:6d2c3f36be563cb4cbde9c",
  measurementId: "G-X03CKE1G58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile,
    sendEmailVerification,
    signOut,
    onAuthStateChanged
};
