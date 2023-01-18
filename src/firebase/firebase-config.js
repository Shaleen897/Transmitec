
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2HSlHpbARczV-QqYJyH1GQ9gQMx6y_Q0",
  authDomain: "school-syste.firebaseapp.com",
  projectId: "school-syste",
  storageBucket: "school-syste.appspot.com",
  messagingSenderId: "285172462328",
  appId: "1:285172462328:web:ddd04a5ded17da008d410d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

