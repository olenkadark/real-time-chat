// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signOut as FBsignOut } from "firebase/auth";
import { onAuthStateChanged as onFBAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function signOut() {
    return FBsignOut(auth);
}

export function onAuthStateChanged(fn) {
    return onFBAuthStateChanged(auth, fn);
}