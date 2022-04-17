// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9SldHSAxLSaY953kZZnOm14mqwZpIGfQ",
    authDomain: "english-tutor-react.firebaseapp.com",
    projectId: "english-tutor-react",
    storageBucket: "english-tutor-react.appspot.com",
    messagingSenderId: "490254060778",
    appId: "1:490254060778:web:32d6edf857fa0e6b391b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;