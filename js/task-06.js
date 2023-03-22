const inputEl = document.querySelector('#validation-input')
const attDataLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length !== attDataLength) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    };
    if (event.currentTarget.value.length === attDataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    };
    
};