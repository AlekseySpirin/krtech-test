// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1-8Rw3qdb8Ou0EuHjRw_-UKAIY4bJ-PM",
  authDomain: "chat-krtech.firebaseapp.com",
  projectId: "chat-krtech",
  storageBucket: "chat-krtech.appspot.com",
  messagingSenderId: "901601750535",
  appId: "1:901601750535:web:7e545783051db0cb8904a2",
  measurementId: "G-Q0FBDTQVDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
