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
        if (passwordInput === password) {
            // Password is correct, set authorization flag and redirect
            localStorage.setItem('authorized', 'true');
            window.location.href = "data.html"; // Redirect to the main page
        } else {
            // Incorrect password, show an error message
            alert("Incorrect password. Please try again.");
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
}
