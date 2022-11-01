const fullNameInput = document.querySelector('#full-name');
const variantInput = document.querySelector('#variant');
const telephoneInput = document.querySelector('#telephone');
const facultyInput = document.querySelector('#faculty');
const addressInput = document.querySelector('#address')

const fullNameConfirm = document.querySelector('#full-name-confirm span.value');
const variantConfirm = document.querySelector('#variant-confirm span.value');
const telephoneConfirm = document.querySelector('#telephone-confirm span.value');
const facultyConfirm = document.querySelector('#faculty-confirm span.value');
const addressConfirm = document.querySelector('#address-confirm span.value');


const ifCorrectInput = (input, confirmParagraph) => {
    input.classList.add('correct');
    input.classList.remove('incorrect');
    confirmParagraph.innerText = input.value;
}

const ifIncorrectInput = (input, confirm) => {
    input.classList.add('incorrect');
    input.classList.remove('correct');
    confirm.innerText = "";
}

fullNameInput.addEventListener('blur', () => {
    if (/[A-ZА-ЯЄІЇ][a-zа-яєії]+ [A-ZА-ЯЄІЇ]\.[A-ZА-ЯЄІЇ]\./g.test(fullNameInput.value)) {
        ifCorrectInput(fullNameInput, fullNameConfirm);
    } else {
        ifIncorrectInput(fullNameInput, fullNameConfirm);
    }
})

variantInput.addEventListener('blur', () => {
    if (/\d{1,2}/g.test(variantInput.value)) {
        ifCorrectInput(variantInput, variantConfirm);
    } else {
        ifIncorrectInput(variantInput, variantConfirm);
    }
})

telephoneInput.addEventListener('blur', () => {
    if(/\(\d{3}\)-\d{3}-\d{2}-\d{2}/g.test(telephoneInput.value)) {
        ifCorrectInput(telephoneInput, telephoneConfirm);
    } else {
        ifIncorrectInput(telephoneInput, telephoneConfirm);
    }
})

facultyInput.addEventListener('blur', () => {
    if(/[А-ЯЄІЇ]{4}/g.test(facultyInput.value)) {
        ifCorrectInput(facultyInput, facultyConfirm);
    } else {
        ifIncorrectInput(facultyInput, facultyConfirm);
    }
})

addressInput.addEventListener('blur', () => {
    if(/м\. \d{6}/g.test(addressInput.value)) {
        ifCorrectInput(addressInput, addressConfirm);
    } else {
        ifIncorrectInput(addressInput, addressConfirm);
    }
})
