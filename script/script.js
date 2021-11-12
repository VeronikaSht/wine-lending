const burgerIcon = document.querySelector('.menu__icon');
const burgerMenu = document.querySelector('.burger');
const nameInput = document.getElementById('fname');
const phoneInput = document.getElementById('fnumber');
const submitBtn = document.getElementById('submit__btn');

// display and put away berger menu list
document.addEventListener('click', function(e) {
    const target = e.target;

    if (target != burgerIcon) {
        burgerMenu.style.display = 'none';
    }
    else if (target == burgerIcon && burgerMenu.style.display != 'none') {
        burgerMenu.style.display = 'none';
    }
    else if (target == burgerIcon || target == burgerIcon.getElementsByTagName('span')[0]) {
        burgerMenu.style.display = 'block';
    }
    else {

    }
});

// check namee input
function checkName() {
    if (nameInput.value.match(/[0-9]/)) {
        nameInput.setCustomValidity('Поле не должно содержать цифры');
        return false;
    }
    else {
        nameInput.setCustomValidity('');
        return true;
    }
}

// check phone number input
function checkPhone() {
    if (!phoneInput.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
        phoneInput.setCustomValidity('Поле не валидно');
        return false;
    }
    else {
        phoneInput.setCustomValidity('');
        return true;
    }
}

// check data and save it in session storage
submitBtn.addEventListener('click', function(e) {

    if (checkName() && checkPhone()) {
        e.preventDefault();

        let taster = {
            name : nameInput.value,
            phone : phoneInput.value
        };

        // form is sended info
        alert('Данные записаны');

        // save data in session storage
        sessionStorage.setItem('name', taster.name);
        sessionStorage.setItem('phone', taster.phone);

        // clear input fields
        nameInput.value = '';
        phoneInput.value = '';
    }
    else {

    }
});

