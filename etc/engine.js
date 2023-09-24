fetch("/check-password", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ password: passwordInput })
})
.then(response => response.json())
.then(data => {
    if (data.authorized) {
        // Password is correct, set authorization flag and redirect
        localStorage.setItem('authorized', 'true');
        window.location.href = "data.html"; // Replace with the actual main page URL
    } else {
        alert("Incorrect password. Please try again.");
    }
})
.catch(error => {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
});
