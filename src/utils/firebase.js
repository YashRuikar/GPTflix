// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu3VxA05IFJNVpz_nJJsbc9vDWRENvCsc",
  authDomain: "gptflix-25a70.firebaseapp.com",
  projectId: "gptflix-25a70",
  storageBucket: "gptflix-25a70.appspot.com",
  messagingSenderId: "1000115700090",
  appId: "1:1000115700090:web:50ee78062e01bca90d96c3",
  measurementId: "G-XWWEH7RJH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();