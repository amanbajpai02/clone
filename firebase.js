import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCW8SlDscKgQe9RHPT8e5nqPza_KohPBRs",
  authDomain: "clone-d2283.firebaseapp.com",
  databaseURL: "https://clone-d2283.firebaseio.com",
  projectId: "clone-d2283",
  storageBucket: "clone-d2283.appspot.com",
  messagingSenderId: "996705246017",
  appId: "1:996705246017:web:780c3cbbc2d54c71da9fc0",
  measurementId: "G-BP4EFTCFSK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };