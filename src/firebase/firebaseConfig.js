import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_QtmtfMZtxxf2i8hiSRT6sgnlO7W8O0",
  authDomain: "ai-trip-planner-bf3ca.firebaseapp.com",
  projectId: "ai-trip-planner-bf3ca",
  storageBucket: "ai-trip-planner-bf3ca.appspot.com",
  messagingSenderId: "56818881848",
  appId: "1:56818881848:web:78116928bde6653fecddcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

