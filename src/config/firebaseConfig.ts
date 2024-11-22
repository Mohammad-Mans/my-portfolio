import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo9rV5QUXL0HFCwBdPmYqsce56enl8o7E",
  authDomain: "my-portfolio-972b0.firebaseapp.com",
  projectId: "my-portfolio-972b0",
  storageBucket: "my-portfolio-972b0.firebasestorage.app",
  messagingSenderId: "215368463138",
  appId: "1:215368463138:web:93e864d1e86d843ee72b7b",
  measurementId: "G-V8SRZ6H7YQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, storage };