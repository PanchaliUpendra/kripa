// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANpHWzBitTOvk1yL_5NxDeD61pXuuwxWU",
  authDomain: "kripatesting.firebaseapp.com",
  projectId: "kripatesting",
  storageBucket: "kripatesting.appspot.com",
  messagingSenderId: "7979004332",
  appId: "1:7979004332:web:87ced34b7b4237216b0a09",
  measurementId: "G-LN6VGBLRWL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);