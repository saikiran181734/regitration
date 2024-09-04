document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (username.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters long.";
        event.preventDefault();
    }

    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        event.preventDefault();
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        event.preventDefault();
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
