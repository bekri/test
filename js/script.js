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
            // Password is correct, redirect to the main page
            window.location.href = "connect.html"; // Replace with the actual main page URL
        } else {
            // Incorrect password, show an error message
            alert("Incorrect password. Please try again.");
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
}
