document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can perform validation and send the login credentials to the backend for authentication
    // For demonstration purposes, let's just log the credentials to the console
    console.log("Username: " + username);
    console.log("Password: " + password);
});
