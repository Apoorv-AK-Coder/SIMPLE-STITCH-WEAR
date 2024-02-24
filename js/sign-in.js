import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("sign-in");
    // const signInButton = signInForm.querySelector(".buttonSignIn");
    const signInButton = signInForm.querySelector("#buttonSignIn");

    signInButton.addEventListener("click", SignIn);
});

async function SignIn(event) {
    event.preventDefault(); // Prevent the default form submission

    let uid = document.getElementById("userid").value;
    let password = document.getElementById("pass").value;

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

    try {
        const userCredential = await signInWithEmailAndPassword(auth, uid, password);
        alert("User signed in:", userCredential.user.uid);
        window.location.href = "./profile.html";
    } catch (error) {
        // alert("Error signing in:", error.message);
        console.error("Error signing in:", error.message);
    }
}
