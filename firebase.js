// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD09789aBgTNfsMQUQr45akXwFAC8Rdv7c",
	authDomain: "prayer-connection.firebaseapp.com",
	projectId: "prayer-connection",
	storageBucket: "prayer-connection.appspot.com",
	messagingSenderId: "841137489113",
	appId: "1:841137489113:web:d8dff4ee61817070b7eac8",
	measurementId: "G-W3W0H8HSWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const isLoggedIn = () => {
	return firebase.auth().currentUser;
};

export { app, auth, analytics, isLoggedIn };
