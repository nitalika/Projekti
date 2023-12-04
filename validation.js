function validateForm() {
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