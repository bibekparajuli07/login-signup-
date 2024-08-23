// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0AevGpxTzHlI_CwyFSxRxASKzyNC_PkM",
  authDomain: "sample-login-f5aeb.firebaseapp.com",
  projectId: "sample-login-f5aeb",
  storageBucket: "sample-login-f5aeb.appspot.com",
  messagingSenderId: "28489870957",
  appId: "1:28489870957:web:1bddf9f818d78380d19964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db=getFirestore(app);
export default app;
