import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNrTIx1qxNPnvoT7dszHwQwk7jnCXUD3Y",
  authDomain: "escuelitas-ntic.firebaseapp.com",
  projectId: "escuelitas-ntic",
  storageBucket: "escuelitas-ntic.appspot.com",
  messagingSenderId: "5972197565",
  appId: "1:5972197565:web:d300d2f962c3196c4037d4"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;