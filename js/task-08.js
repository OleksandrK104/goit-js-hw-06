const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    console.dir(formElements);
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password,
    };
    console.log(formData);

    if (email && password) {
        formEl.reset('');
    } else {
        alert('Всі поля повинні бути заповнені')
    }
};

