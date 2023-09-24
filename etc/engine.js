function checkPassword() {
    const password = "@150564220493"; // Replace with your actual password
    const passwordInput = document.getElementById("passwordInput").value;

    if (passwordInput === password) {
        // Password is correct, set authorization flag and redirect
        localStorage.setItem('authorized', 'true');
        window.location.href = "connect.html"; // Replace with the actual main page URL
    } else {
        alert("Incorrect password. Please try again.");
    }
}