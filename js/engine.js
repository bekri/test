function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;

    // Make a POST request to the server to check the password
    fetch("/login", { // Updated endpoint to "/login"
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: passwordInput })
    })
    .then(response => {
        if (response.status === 200) {
            // Password is correct, set authorization flag and redirect
            localStorage.setItem('authorized', 'true');
            return response.json();
        } else if (response.status === 401) {
            // Password is incorrect, handle the error response
            throw new Error("Incorrect password");
        } else {
            // Handle other response statuses as needed
            throw new Error("An error occurred");
        }
    })
    .then(data => {
        // Process the JWT or other data if needed
        // For example, you can save the JWT in localStorage
        localStorage.setItem('jwt', data.token);

        // Redirect to the desired page
        window.location.href = "data.html"; // Replace with the actual main page URL
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
}
