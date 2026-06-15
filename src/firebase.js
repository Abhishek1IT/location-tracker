/* eslint-disable no-useless-assignment */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBXVHUVGM6RnjjafyQDRgz1d0lB31EpsY0",
    authDomain: "jhftgfytvhg.firebaseapp.com",
    databaseURL: "https://jhftgfytvhg-default-rtdb.firebaseio.com",
    projectId: "jhftgfytvhg",
    storageBucket: "jhftgfytvhg.firebasestorage.app",
    messagingSenderId: "388276063078",
    appId: "1:388276063078:web:7e6b5762e7aebb19c396a7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);