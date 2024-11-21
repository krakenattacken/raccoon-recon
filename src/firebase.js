// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVhUjofI83eLqTalu5sSs2GR6gw8adJ7M",
  authDomain: "raccoon-recon.firebaseapp.com",
  projectId: "raccoon-recon",
  storageBucket: "raccoon-recon.firebasestorage.app",
  messagingSenderId: "813839179989",
  appId: "1:813839179989:web:c7ed13732df432f0ec825c",
  measurementId: "G-Z3JDXL8J8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;