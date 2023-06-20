import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAQLmfTFQgsHF7pL4mVSgpK5tlmIBhUzM",
  authDomain: "tienda-eyewear.firebaseapp.com",
  projectId: "tienda-eyewear",
  storageBucket: "tienda-eyewear.appspot.com",
  messagingSenderId: "201873355269",
  appId: "1:201873355269:web:f335cb18d7c60d35bc226c",
  measurementId: "G-Z5N25B0MX8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
