import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMIjqIOHPpISu7Wst42z7FP6-rj-lmvYo",

  authDomain: "disney-plus-app-b513b.firebaseapp.com",

  projectId: "disney-plus-app-b513b",

  storageBucket: "disney-plus-app-b513b.appspot.com",

  messagingSenderId: "350976473465",

  appId: "1:350976473465:web:0ed774ec4f8b7ed4b897a8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
