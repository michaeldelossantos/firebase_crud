import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIEEA2Gt1Yd0bf4nDku5NG0VJChHBfgto",
  authDomain: "fir-crud-7e6cf.firebaseapp.com",
  projectId: "fir-crud-7e6cf",
  storageBucket: "fir-crud-7e6cf.appspot.com",
  messagingSenderId: "423377676302",
  appId: "1:423377676302:web:38db02f08f1b992cc0345f",
  measurementId: "G-ZY73ZSHVGZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };