document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = validateForm();
    if (isValid) {
        showPopup();
    }
});

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';

    // Validate username
    let username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Validate email
    let email = document.getElementById('email').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate password
    let password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validate confirm password
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
    document.getElementById('registrationForm').reset();
}
