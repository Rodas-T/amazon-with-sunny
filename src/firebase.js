// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnPIU_tgsPl_uVxsh8FYe80XRZyvAhlR0",
  authDomain: "challenge-with-sunny.firebaseapp.com",
  projectId: "challenge-with-sunny",
  storageBucket: "challenge-with-sunny.appspot.com",
  messagingSenderId: "1003114109462",
  appId: "1:1003114109462:web:1854df053d7d310c15f337",
  measurementId: "G-5J73SEVH2S"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const db = getFirestore(app);
// const db = firebaseApp.firestore();
// const auth = getAuth(app);

// createUserWithEmailAndPassword(auth, email, password)
//   .then((auth)=> {
//         console.log(auth);
//     // ...
//   })
//   .catch(error => alert(error.message))
// const c =createUserWithEmailAndPassword(app);

  
// export { db };