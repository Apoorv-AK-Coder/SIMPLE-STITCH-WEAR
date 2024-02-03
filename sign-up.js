// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5D005fXr5ghftEkda83Hfur7YP682WkA",
  authDomain: "simple-stitch-wear-412007.firebaseapp.com",
  databaseURL: "https://simple-stitch-wear-412007-default-rtdb.firebaseio.com",
  projectId: "simple-stitch-wear-412007",
  storageBucket: "simple-stitch-wear-412007.appspot.com",
  messagingSenderId: "623368346702",
  appId: "1:623368346702:web:3fb9b9f1df34d35a27371f",
  measurementId: "G-QH3385Y2X6"
};

firebase.initializeApp(firebaseConfig);

  // Reference to the Firebase database
  var database = firebase.database();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function submitForm() {
    var fullName = document.getElementById('uname').value;
    var userId = document.getElementById('uid').value;
    var email = document.getElementById('mail').value;
    var phoneNumber = document.getElementById('number').value;
    var password = document.getElementById('password').value;
  
    // Push data to Firebase
    database.ref('users').push({
      full_name: fullName,
      user_id: userId,
      email: email,
      phone_number: phoneNumber,
      password: password
    });
  
    alert('Data submitted successfully!');
  }
  