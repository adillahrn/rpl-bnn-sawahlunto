import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
// Minta pengguna untuk mengisi config ini dari Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ||  "AIzaSyDNS2Grk8BvSm78sIRGAQsdtMLeQUkhP64",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bnn-kota-sawahlunto.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bnn-kota-sawahlunto",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bnn-kota-sawahlunto.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "938979713881",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:938979713881:web:99f39f4521684633d7e248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error logging in with Google:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};
