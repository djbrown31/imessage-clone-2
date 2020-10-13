import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3wUty-yQ28jyo-ASC5e8qGX1axil6j7o",
    authDomain: "imessage-cloned.firebaseapp.com",
    databaseURL: "https://imessage-cloned.firebaseio.com",
    projectId: "imessage-cloned",
    storageBucket: "imessage-cloned.appspot.com",
    messagingSenderId: "494906110516",
    appId: "1:494906110516:web:b00a8f2cd36e301ecdd061",
    measurementId: "G-7608EKF2SJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;