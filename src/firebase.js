import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMWntf214mkGRpUx4W-PjZSWewp_Fn9CQ",
  authDomain: "smart-supply-d389d.firebaseapp.com",
  projectId: "smart-supply-d389d",
  storageBucket: "smart-supply-d389d.appspot.com",
  messagingSenderId: "146836761693",
  appId: "1:146836761693:web:8752706545a4f1b621b1b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default firestore = getFirestore(app);
