// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAtWB3XPazK1_NmTd6i9T5ZOCaYxagzcic",
    authDomain: "click-create-120e4.firebaseapp.com",
    projectId: "click-create-120e4",
    storageBucket: "click-create-120e4.firebasestorage.app",
    messagingSenderId: "695547963265",
    appId: "1:695547963265:web:71318cc5524bf86ec72a80",
    measurementId: "G-VNKR8F1RPH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);