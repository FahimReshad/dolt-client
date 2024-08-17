// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHjyUMyykfbJ6FDy6FGkklwkK5nhvD4Hs",
  authDomain: "dolt-task.firebaseapp.com",
  projectId: "dolt-task",
  storageBucket: "dolt-task.appspot.com",
  messagingSenderId: "464694248503",
  appId: "1:464694248503:web:734315002455efdf6a2bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;