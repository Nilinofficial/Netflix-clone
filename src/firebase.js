import {initializeApp,getApps,getApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDNIN0k0z9pndGmBIdMPihOQR_lp9zmT0Y",
  authDomain: "netflix-bebeb.firebaseapp.com",
  projectId: "netflix-bebeb",
  storageBucket: "netflix-bebeb.appspot.com",
  messagingSenderId: "664201083403",
  appId: "1:664201083403:web:f134c1b1f5c8512722a50e",
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const auth = getAuth();


export {auth}






