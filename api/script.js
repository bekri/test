document.referrerPolicy = 'no-referrer';

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;

    if (!passwordInput) {
        alert("Please enter a password.");
        return;
    }

    fetch("/api/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: passwordInput }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        if (data.isAuthenticated) {
            sessionStorage.setItem('authorized', 'true');
            window.location.href = "data.html";
        } else {
            alert("Incorrect password. Please try again.");
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again later.");
    });
}