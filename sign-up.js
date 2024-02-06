import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("sign-up");
  const signUpButton = signUpForm.querySelector(".button2");

  signUpButton.addEventListener("click", SignUp);
});

async function SignUp(event) {
  event.preventDefault(); // Prevent the default form submission

  let uname = document.getElementById("uname").value;
  let uid = document.getElementById("uid").value;
  let mail = document.getElementById("mail").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirm-password").value;

  if (password !== confirmpassword) {
    console.error("Passwords do not match");
    return;
  }

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

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, mail, password);

    // If user creation is successful, store additional user data in the database
    const userId = userCredential.user.uid;
    let data = {
      "FirstName": uname,
    "UserId": uid,
    "Email": mail,
    "PhoneNumber": number,
    "Password": password,
    "ConfirmPassword": confirmpassword
    };

    await set(ref(database, `users/${uid}`), data);

    // const usersRef = ref(database, "users");
    // push(usersRef, data);

    alert("The sign-up Successful Please Login Now");
  } catch (error) {
    // alert("Error creating user:", error.message);
    console.error("Error creating user:", error.message);
  }
}

function showSuccessMessage() {
  // Display a success message to the user
  const successMessage = document.getElementById("success-message");
  // successMessage.innerText = "Sign-up successful!";
  alert("Successful signup");
}

function showErrorMessage(error) {
  // Display an error message to the user
  const errorMessage = document.getElementById("error-message");
  errorMessage.innerText = "Error: " + error.message;
}

