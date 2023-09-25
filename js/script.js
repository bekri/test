// Import the correct password from the API module
const correctPassword = require("../api/authenticate").correctPassword;

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;

    if (passwordInput === correctPassword) {
        // Password is correct, set authorization flag and redirect
        localStorage.setItem('authorized', 'true');
        window.location.href = "data.html"; // Redirect to the main page
    } else {
        // Incorrect password, show an error message
        alert("Incorrect password. Please try again.");
    }
}
