function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;

    // Send a POST request to your serverless function for authentication
    fetch("../api/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: passwordInput }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.isAuthenticated) {
            // Password is correct, set authorization flag, session expiration, and last activity
            localStorage.setItem('authorized', 'true');
            // Set a session expiration time (e.g., 30 minutes)
            const sessionExpiration = new Date().getTime() + 30 * 60 * 1000;
            localStorage.setItem('sessionExpiration', sessionExpiration);
            // Set the last activity timestamp
            localStorage.setItem('lastActivity', new Date().getTime());
            // Redirect to the main page
            window.location.href = "data.html";
        } else {
            // Incorrect password, show an error message
            alert("Incorrect password. Please try again.");
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
}

// Check for session expiration and last activity on page load
function checkSessionExpirationAndActivity() {
    const sessionExpiration = localStorage.getItem('sessionExpiration');
    const lastActivity = localStorage.getItem('lastActivity');
    const currentTime = new Date().getTime();

    if (!sessionExpiration || currentTime > sessionExpiration || currentTime - lastActivity > 30 * 60 * 1000) {
        // Session has expired or user has been inactive for more than 30 minutes
        // Clear authorization flag, session data, and redirect to login
        localStorage.removeItem('authorized');
        localStorage.removeItem('sessionExpiration');
        localStorage.removeItem('lastActivity');
        window.location.href = 'index.html';
    } else {
        // Update the last activity timestamp
        localStorage.setItem('lastActivity', currentTime);
    }
}

// Call checkSessionExpirationAndActivity on page load
checkSessionExpirationAndActivity();
