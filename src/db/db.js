// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwQMcUV7z9Eq8nDz1IHs0m2oIxKSU3nkA",
    authDomain: "portfolio-542c2.firebaseapp.com",
    projectId: "portfolio-542c2",
    storageBucket: "portfolio-542c2.appspot.com",
    messagingSenderId: "101496307185",
    appId: "1:101496307185:web:307c188579a4f0963d9850"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db

