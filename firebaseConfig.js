import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBpmto_Q1bipK_Fqxfr6gvzK2D6c9SuHDo",
    authDomain: "shelter-9f661.firebaseapp.com",
    projectId: "shelter-9f661",
    storageBucket: "shelter-9f661.appspot.com",
    messagingSenderId: "2759569419",
    appId: "1:2759569419:web:b0f29acc0ff40a0e7a170e",
    measurementId: "G-GKDNN69YE7"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
