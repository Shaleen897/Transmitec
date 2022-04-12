
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASUDcz3cy7Nff_QdlBFn9TAvwq2IR30Rs",
  authDomain: "transmitec-e79ca.firebaseapp.com",
  projectId: "transmitec-e79ca",
  storageBucket: "transmitec-e79ca.appspot.com",
  messagingSenderId: "446719050300",
  appId: "1:446719050300:web:17ba7fd5705c2d84b9f939"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

