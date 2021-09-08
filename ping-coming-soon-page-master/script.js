const form = document.querySelector('.subscribe');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const small = form.querySelector('small');
    const inputSpace = form.querySelector('input');

    if (!emailValue) {
       email.classList.add('error');
       small.innerHTML = 'Whoops! It looks like you forgot to add your email';
       inputSpace.style.marginBottom = '80px';
       small.style.display = 'inline-block';


    } else if (!validateEmail(emailValue)) {
        form.classList.add('error');
        inputSpace.style.marginBottom = '80px';
        small.style.display = 'inline-block';
    } else {
        form.classList.remove('error');
        small.style.display = 'none';
        window.location.reload();
    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}