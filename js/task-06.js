const inputEl = document.querySelector('#validation-input')
const attDataLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length !== attDataLength) {
        return inputEl.classList.add('invalid');
    };
    return inputEl.classList.add('valid');
};
