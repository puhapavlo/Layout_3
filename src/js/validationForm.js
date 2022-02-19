const form = document.querySelector('.popup__form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputsRequired = [
    inputName,
    inputEmail,
    inputTel
]

form.onsubmit = function() {
    let emailVal = inputEmail.value;
    let telVal = inputTel.value;
    let emptyInputs = Array.from(inputsRequired).filter(input => input.value === '');

    inputsRequired.forEach((input) => {
        if(input.value === ''){
            input.classList.add('error');
            input.placeholder = 'Поле обязательно для заполнения';
        }else{
            input.classList.remove('error');
            input.placeholder = ' ';
        }
    });

    if(emptyInputs.length !== 0){
        return false;
    }

    return true;
}