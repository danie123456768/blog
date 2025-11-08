import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVCMOHxm68dmnn9oJLIDCju2467zoAjbM",
  authDomain: "react-blog-auth-71344.firebaseapp.com",
  projectId: "react-blog-auth-71344",
  storageBucket: "react-blog-auth-71344.appspot.com",
  messagingSenderId: "944949288229",
  appId: "1:944949288229:web:bd07e92cb9f8f47018cecc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};
