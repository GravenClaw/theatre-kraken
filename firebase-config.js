// Collez ici la configuration de votre projet Firebase (voir le guide).
// Tant que la valeur est null, le site fonctionne en mode simple avec places.js.
//
// Exemple de forme attendue (remplacez par VOS valeurs) :
// window.FIREBASE_CONFIG = {
//   apiKey: "...",
//   authDomain: "mon-projet.firebaseapp.com",
//   databaseURL: "https://mon-projet-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "mon-projet",
//   appId: "..."
// };
window.FIREBASE_CONFIG = { import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDtsuPvaQlKz928iGGVp-lES_QJuQWU_JM",
    authDomain: "kraken-bf767.firebaseapp.com",
    databaseURL: "https://kraken-bf767-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kraken-bf767",
    storageBucket: "kraken-bf767.firebasestorage.app",
    messagingSenderId: "454259927411",
    appId: "1:454259927411:web:578c068b663bc623cc7d06",
    measurementId: "G-6HYY6WJCXJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);};
