import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCenHACn3cr2QKM-Y4LrHtkyX5yIDLyUAA",
  authDomain: "hello-59558.firebaseapp.com",
  projectId: "hello-59558",
  storageBucket: "hello-59558.appspot.com",
  messagingSenderId: "23274472391",
  appId: "1:23274472391:web:9af9837db1249812914fe2",
  measurementId: "G-T9QG34ZQM3"
};

if(!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const realDB = firebase.database();
const firestore = firebase.firestore();

export {realDB, firestore} ;