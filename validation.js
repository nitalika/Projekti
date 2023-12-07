document.getElementById('form').addEventListener('submit', function(event) {
    var isValidName = validateName();
    var isValidLname = validateLname();
    var isValidEmail = validateEmail();
    var isValidPassword = validatePassword();
    var isValidConfirmPassword = validateConfirmPassword();
    var isValidPhoneNr = validatePhoneNr();
    var isValidBdate = validateBdate();

    if (!isValidName || !isValidLname|| !isValidEmail || !isValidPassword || !isValidConfirmPassword || !isValidPhoneNr || !isValidBdate ) {
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




function validatePhoneNr() {
    var phoneNr = document.getElementById('phoneNr').value;
    var phoneNrError = document.getElementById('phoneNrError');

    phoneNrError.innerHTML = '';

    if (phoneNr.trim() === '') {
        phoneNrError.innerHTML = 'phone number cannot be empty.';
        return false;
    }
    
    if (!/^\d+$/.test(phoneNr)) {
        phoneNrError.innerHTML = 'phone number should only contain numbers.';
        return false;
    }
    
    if (phoneNr.length < 9 || phoneNr.length > 16) {
        phoneNrError.innerHTML = 'phone number should be between 9 and 16 characters.';
        return false;
    }
}    


function validateBdate() {
    var birthDate = document.getElementById('birthDate').value;
    var bDateError = document.getElementById('bDateError');

    bDateError.innerHTML = '';

    if (birthDate.trim() === '') {
        bDateError.innerHTML = 'Birth date cannot be empty.';
        return false;
    }

    var birthYear = new Date(birthDate).getFullYear();

    if (birthYear > 2005 || birthYear < 1973) {
        bDateError.innerHTML = 'You cannot volunteer if you are under 18 or over 50';
        return false;
    }

    return true; 
}


export {
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validatePhoneNr,
    validateBdate,
    validateGender
  };