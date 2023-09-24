// password.js

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value.trim(); // Trim whitespace

    // Make an HTTP POST request to the serverless function for password validation
    fetch('/api/passwordValidation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passwordInput }),
    })
    .then(response => {
        if (response.status === 200) {
            // Password is correct, set authorization flag and redirect
            const expirationTime = new Date().getTime() + 30 * 60 * 1000; // 30 minutes in milliseconds
            localStorage.setItem('authorized', JSON.stringify({ authorized: true, expiration: expirationTime }));
            window.location.href = "data.html";
        } else {
            // Incorrect password, display an error message
            alert("Incorrect password. Please try again.");
        }
    })
    .catch(error => {
        console.error(error);
    });
}
