import firebase from "firebase";

const BBSConfig = {
	apiKey: "AIzaSyCenHACn3cr2QKM-Y4LrHtkyX5yIDLyUAA",
	authDomain: "hello-59558.firebaseapp.com",
	projectId: "hello-59558",
	storageBucket: "hello-59558.appspot.com",
	messagingSenderId: "23274472391",
	appId: "1:23274472391:web:94a909c6e434c6f6914fe2",
	measurementId: "G-GXZMYTT48G"
};

// firebase 관련 연결 Connection이 불필요하게 과다하게 연결 생성되는 것을
// 방지하는 코드
if (!firebase.apps.length) {
  firebase.initializeApp(BBSConfig);
}

const realDB = firebase.database();
const firestore = firebase.firestore();

export { realDB, firestore };