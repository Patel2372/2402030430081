// script.js
function submitForm() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    
    if (userId === "admin" && password === "1234") { // Example credentials
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}