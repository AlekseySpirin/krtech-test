import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

interface FirebaseContextProps {
  analytics: Analytics;
  auth: Auth;
  firestore: Firestore;
}

export const Context = createContext<FirebaseContextProps | null>(null);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1-8Rw3qdb8Ou0EuHjRw_-UKAIY4bJ-PM',
  authDomain: 'chat-krtech.firebaseapp.com',
  projectId: 'chat-krtech',
  storageBucket: 'chat-krtech.appspot.com',
  messagingSenderId: '901601750535',
  appId: '1:901601750535:web:7e545783051db0cb8904a2',
  measurementId: 'G-Q0FBDTQVDL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{ analytics, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
