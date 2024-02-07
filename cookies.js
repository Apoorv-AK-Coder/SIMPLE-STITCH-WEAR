// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

// Function to show cookie consent message
function showCookieConsentMessage() {
    const cookieConsentMessage = document.createElement('div');
    cookieConsentMessage.innerHTML = `
        <div id="cookieConsent" style="position: fixed; bottom: 0; left: 0; width: 100%; background-color: #f1f1f1; padding: 10px 0; text-align: center; z-index: 100;">
            This website uses cookies to ensure you get the best experience on our website.
            <button onclick="acceptCookies()" style="margin-left: 20px;">Got it!</button>
        </div>
    `;
    document.body.appendChild(cookieConsentMessage);
}

// Function to handle cookie acceptance
function acceptCookies() {
    setCookie('acceptedCookies', 'true', 365); // Set a cookie to indicate that the user accepted cookies
    document.getElementById('cookieConsent').style.display = 'none'; // Hide the cookie consent message
}

// Check if the user has accepted cookies
window.onload = function() {
    if (!getCookie('acceptedCookies')) {
        showCookieConsentMessage();
    }
};
