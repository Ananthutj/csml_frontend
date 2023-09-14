// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigNoise = {
    apiKey: "AIzaSyD8M04p4XUyQ1Sca1-XWAb9t0BgiYQOJMc",
    authDomain: "noise-csml.firebaseapp.com",
    projectId: "noise-csml",
    storageBucket: "noise-csml.appspot.com",
    messagingSenderId: "14893944288",
    appId: "1:14893944288:web:170169883490a88b646f85",
    measurementId: "G-ZDSPK6KR93"
};


const firebaseConfigTest = {
    apiKey: "AIzaSyCaHfFgaFITQ5F8uDzl3_YF-cdLf73hez4",
    authDomain: "testnoise-d24bf.firebaseapp.com",
    projectId: "testnoise-d24bf",
    storageBucket: "testnoise-d24bf.appspot.com",
    messagingSenderId: "55668168218",
    appId: "1:55668168218:web:37de118c2f455f7cd8e3a3"
};

const firebaseConfigWater = {
    apiKey: "AIzaSyD-EL69mSly_G4kj_KwVr5j8hxEKoIx5oY",
    authDomain: "csml-project-6f5b8.firebaseapp.com",
    projectId: "csml-project-6f5b8",
    storageBucket: "csml-project-6f5b8.appspot.com",
    messagingSenderId: "1047585578574",
    appId: "1:1047585578574:web:6a931534f0f710f4c72d1f",
    measurementId: "G-3JE772MJ71"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfigNoise, 'devNoise');
const dbNoise = initializeFirestore(app);

const appTest = initializeApp(firebaseConfigTest, 'testNoise');
const dbTest = initializeFirestore(appTest);

const appWater = initializeApp(firebaseConfigWater, 'devWater');
const dbWater = initializeFirestore(appWater);


export { dbNoise, dbTest, dbWater };