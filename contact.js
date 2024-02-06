import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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
const database = getDatabase(app);

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const contactRef = ref(database, 'contacts');
    const newContactRef = push(contactRef);

    const data = {
        FirstName: name,
        Email: email,
        PhoneNumber: phone,
        Message: message
    };

    set(newContactRef, data)
        .then(() => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message. Please try again later.');
        });
});