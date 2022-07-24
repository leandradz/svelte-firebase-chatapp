import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDQu-3CVcsLdbTT222qcqkjJU7PHpLMgHA",
  authDomain: "svelte-firebase-chatapp.firebaseapp.com",
  projectId: "svelte-firebase-chatapp",
  storageBucket: "svelte-firebase-chatapp.appspot.com",
  messagingSenderId: "857296843784",
  appId: "1:857296843784:web:d366fbcb7c53c2500c8dbd",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();