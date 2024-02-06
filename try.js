contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const contactRef = ref(database, 'contacts');
    const newContactRef = push(contactRef);

   /* const data = {
        FirstName: name,
        Email: email,
        PhoneNumber: phone,
        Message: message
    };*/

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
