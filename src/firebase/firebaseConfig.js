// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5aBM2gWIyIgC0pHXfjxVf9-rL3Sm44rQ",
  authDomain: "e-commerce-aa503.firebaseapp.com",
  databaseURL: "https://e-commerce-aa503-default-rtdb.firebaseio.com",
  projectId: "e-commerce-aa503",
  storageBucket: "e-commerce-aa503.firebasestorage.app",
  messagingSenderId: "982658329070",
  appId: "1:982658329070:web:a60b44fa46b76ca18a06ff",
  measurementId: "G-XXMQXJDS12"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
