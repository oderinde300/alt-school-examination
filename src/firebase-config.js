import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBz35EDq4BXU58ZFmBWbMnecKp5W4_kqBI",
    authDomain: "alt-school-examination.firebaseapp.com",
    projectId: "alt-school-examination",
    storageBucket: "alt-school-examination.appspot.com",
    messagingSenderId: "1004680168945",
    appId: "1:1004680168945:web:5296cee7cfaef2c2327050",
    measurementId: "G-WF9Y2BWT21"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);