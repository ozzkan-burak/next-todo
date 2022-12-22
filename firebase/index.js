import {initializeApp} from "firebase/app";

import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDWbT3Wg3Ethj_PVZMLKplR-lMfED0-cDo",
  authDomain: "nextjs-sample-6de07.firebaseapp.com",
  projectId: "nextjs-sample-6de07",
  storageBucket: "nextjs-sample-6de07.appspot.com",
  messagingSenderId: "772685493357",
  appId: "1:772685493357:web:c545299f145e7bbd283b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFireStore();

export {db}
