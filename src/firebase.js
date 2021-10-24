import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlGjtxRxIZ4MCFfhThvPz-IEeuI00vBb4",
  authDomain: "linkedin-clone-b778e.firebaseapp.com",
  projectId: "linkedin-clone-b778e",
  storageBucket: "linkedin-clone-b778e.appspot.com",
  messagingSenderId: "970503735599",
  appId: "1:970503735599:web:945430c88e02e7859739da",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
