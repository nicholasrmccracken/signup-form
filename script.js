const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-pass');
const phone = document.querySelector('#phone');

password.addEventListener('input', () => validatePassword(password, confirmPass));
confirmPass.addEventListener('input', () => validatePassword(password, confirmPass));
phone.addEventListener('input', () => {
    const phoneRegex = /^[0-9]{10}$/;

    if (phoneRegex.test(phone.value)) {
        phone.classList.remove('invalid');
    } else {
        phone.classList.add('invalid');
    }
});

function validatePassword(p1, p2) {
    if (p1.value !== p2.value) {
        p1.classList.add('invalid');
        p2.classList.add('invalid');
    } else {
        p1.classList.remove('invalid');
        p2.classList.remove('invalid');
    }
}
