const form = document.querySelector('.freeTrial');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        addError('firstName', 'First Name cannot be empty');
    } else {
        removeError('firstName');
    }

    if (lastName === '') {
        addError('lastName', 'Last Name cannot be empty');
    } else {
        removeError('lastName');
    }

    if (email === '') {
        addError('email', 'Email cannot be empty');
    } else if (!validateEmail(email)) {
        addError('email', 'Looks like this is not an email');
    } else {
        removeError('email');
    }

    if (password === '') {
        addError('password', 'Password cannot be empty');
    } else {
        removeError('password');
    }
});

function addError(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
}

function removeError(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    const small = formControl.querySelector('small');
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}