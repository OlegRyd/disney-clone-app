import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVwz69Y9rWa0G7jdIFrPHJmuhZGkaRDG8",
  authDomain: "disney-clone-be18a.firebaseapp.com",
  projectId: "disney-clone-be18a",
  storageBucket: "disney-clone-be18a.appspot.com",
  messagingSenderId: "930083314066",
  appId: "1:930083314066:web:6ae7f2f8315a4e177f494b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, provider, storage };
export default db;
