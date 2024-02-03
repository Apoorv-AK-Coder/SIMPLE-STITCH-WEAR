import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    var firebaseConfig = {
  apiKey: "AIzaSyAV348JSscviViD2GQTfQ-Ej5ywF0zEJBk",
  authDomain: "simple-stitch-wear-49549.firebaseapp.com",
  databaseURL: "https://simple-stitch-wear-49549-default-rtdb.firebaseio.com",
  projectId: "simple-stitch-wear-49549",
  storageBucket: "simple-stitch-wear-49549.appspot.com",
  messagingSenderId: "20554738672",
  appId: "1:20554738672:web:9d3cb92e1fde0039904b35",
  measurementId: "G-N2235GQ1G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

var data = {
    "sign-Up": {
        "FirstName": "Apoorv",
        "UserId": "Apoorv123",
        "Email": "apoobhai0@gmail.com",
        "PhoneNumber": 7906875025,
        "Password": "Apoorv@123",
        "ConfirmPassword": "Apoorv@123"
    }
};

const usersRef = ref(database, "users");
const newRef = push(usersRef, data);

// Push data to Firebase
//  var newRef = database.ref("users").push(data);
console.log("Data added with key:", newRef.key);
// console.log(data);