document.addEventListener("DOMContentLoaded", function () {
    let loginLink = document.getElementById("loginLink");
    let logoutLink = document.getElementById("logoutLink");

    // Show/hide navbar links based on session
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        if (loginLink) loginLink.style.display = "none";
        if (logoutLink) logoutLink.style.display = "inline-block";

        // If already logged in and on login page → go home
        if (window.location.pathname.includes("login.html")) {
            window.location.href = "index.html";
        }
    }

    // Handle login form submission
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            // Demo credentials
            if (username === "admin" && password === "123") {
                sessionStorage.setItem("isLoggedIn", "true");
                window.location.href = "review.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }
});

// Logout function
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
