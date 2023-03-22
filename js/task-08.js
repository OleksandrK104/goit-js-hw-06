const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password,
    };

    if (email && password) {
        formEl.reset('');
    } else {
        alert('Всі поля повинні бути заповнені')
    }
    console.log(formData);
};

