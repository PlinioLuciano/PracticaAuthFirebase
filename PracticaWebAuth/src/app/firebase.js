// Este apartatado permite la conexion a Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"; // asegurarse que siempre firebase app y firebase auth tengan la misma version
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js" // Al usar el modelo CDN lo que hay que hacer es incorporar entre las llaver getAuth. y luego iniciarliar el getAuth(app) --- Linea 21
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAQSqIJbY8e165j6GBuZF3EkSLZM2RQYXY",
  authDomain: "fir-app-tuto-2cc09.firebaseapp.com",
  projectId: "fir-app-tuto-2cc09",
  storageBucket: "fir-app-tuto-2cc09.appspot.com",
  messagingSenderId: "599638281861",
  appId: "1:599638281861:web:00345b204cc9066b07a3ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // agrego export delante de la constante, para traer otras aplicaciones.
export const auth = getAuth(app) // Ahora nuestra asignamos el getAuth a una const y va disponer del servico de auth de firebase para poder authenticar usuarios.

// min 38:13