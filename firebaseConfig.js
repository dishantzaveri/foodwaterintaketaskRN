
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtLxgpiVC5ztZ4Qr8TcuhXJpVnrg8tPYA",
    authDomain: "watertracker-8ed35.firebaseapp.com",
    databaseURL: "https://watertracker-8ed35-default-rtdb.firebaseio.com",
    projectId: "watertracker-8ed35",
    storageBucket: "watertracker-8ed35.appspot.com",
    messagingSenderId: "937443250423",
    appId: "1:937443250423:web:d6e8fea123bb3e007683f2",
    measurementId: "G-BYHQEMDC9T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db ,firebaseConfig};

