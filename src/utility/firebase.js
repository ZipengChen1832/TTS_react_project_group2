import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import {
    getDatabase
} from "@firebase/database";


const firebaseConfig = {
apiKey: "AIzaSyCbubqDpYo6l5ilwJylJU-tBrI27IF37tg",
authDomain: "tts-week2-twitter.firebaseapp.com",
databaseURL: "https://tts-week2-twitter-default-rtdb.firebaseio.com",
projectId: "tts-week2-twitter",
storageBucket: "tts-week2-twitter.appspot.com",
messagingSenderId: "486313311883",
appId: "1:486313311883:web:44c918c9605fca64429e8e",
measurementId: "G-49D0LB4T86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase();
