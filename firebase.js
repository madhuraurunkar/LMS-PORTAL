 import {initializeApp} from "firebase/app";
  import "firebase/database"; 
  import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyCe2C-qKlXFirZspa5tkmp1VY1TAZvPjak",
    authDomain: "react-contact-fa05b.firebaseapp.com",
    projectId: "react-contact-fa05b",
    storageBucket: "react-contact-fa05b.appspot.com",
    messagingSenderId: "1092952318572",
    appId: "1:1092952318572:web:7e7f8c1a6688ee9217ae49"
  };
  
   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   