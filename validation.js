document.getElementById('form').addEventListener('submit', function(event) {
    var isValidName = validateName();
    var isValidLname = validateLname();
    var isValidEmail = validateEmail();
    var isValidPassword = validatePassword();
    var isValidConfirmPassword = validateConfirmPassword();

    if (!isValidName || !isValidEmail || !isValidPassword || !isValidConfirmPassword) {
        event.preventDefault();
    }
});

function validateName() {
    var firstName = document.getElementById('firstName').value;
    var nameError = document.getElementById('nameError');

    nameError.innerHTML = '';

    if (firstName.trim() === '') {
        nameError.innerHTML = 'Name cannot be empty.';
        return false;
    }

    if (!/^[a-zA-Z]+$/.test(firstName)) {
        nameError.innerHTML = 'Name should only contain letters.';
        return false;
    }

    if (firstName.length < 3 || firstName.length > 12) {
        nameError.innerHTML = 'Name should be between 3 and 12 characters.';
        return false;
    }

    return true;
}

function validateLname() {
    var lastName = document.getElementById('lastName').value;
    var lastNameError = document.getElementById('lastNameError');

    lastNameError.innerHTML = '';

    if (lastName.trim() === '') {
        lastNameError.innerHTML = 'Last name cannot be empty.';
        return false;
    }

    if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameError.innerHTML = 'Last name should only contain letters.';
        return false;
    }

    if (lastName.length < 3 || lastName.length > 20) {
        lastNameError.innerHTML = 'Last name should be between 3 and 20 characters.';
        return false;
    }

    return true;
}


function validateEmail() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');

    emailError.innerHTML = '';

    if (email.trim() === '') {
        emailError.innerHTML = 'Email cannot be empty.';
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

    if (!emailRegex.test(email)) {
        emailError.innerHTML = 'Invalid email format.';
        return false;
    }

    return true;
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordError');

    passwordError.innerHTML = '';

    if (password.trim() === '') {
        passwordError.innerHTML = 'Password cannot be empty.';
        return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.innerHTML = 'use lowercase, uppercase letter and  number, the password should be 8 characters long.';
        return false;
    }

    return true;
}

function validateConfirmPassword() {
    var confirmPassword = document.getElementById('confirmPassword').value;
    var password = document.getElementById('password').value;
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    confirmPasswordError.innerHTML = '';

    if (confirmPassword.trim() === '') {
        confirmPasswordError.innerHTML = 'Confirm Password cannot be empty.';
        return false;
    }

    if (confirmPassword !== password) {
        confirmPasswordError.innerHTML = 'Passwords do not match.';
        return false;
    }

    return true;
}

//per loginFormen
function validateLogin() {
    var isValidEmail = validateEmail();
    var isValidPassword = validatePassword();

    if (isValidEmail && isValidPassword) {
        document.getElementById('form').submit();
    }
}
