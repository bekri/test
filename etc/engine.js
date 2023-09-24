function checkPassword() {
    //const password = "@150564220493"; // Replace with your actual password
    // Retrieve the password from the environment variable
    const storedPassword = process.env.STORED_PASSWORD || '@1234'; // Default value if not set

// Rest of your code remains the same

    const passwordInput = document.getElementById("passwordInput").value;

    if (passwordInput === password) {
        // Password is correct, set authorization flag and redirect
        localStorage.setItem('authorized', 'true');
        window.location.href = "data.html"; // Replace with the actual main page URL
    } else {
        alert("Incorrect password. Please try again.");
    }
}
