function validate() {

    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');
    let company = document.querySelector('#company');
    let companyNumber = document.querySelector('#companyNumber');
    let submit = document.querySelector('#submit');

    let usernameValid = true;
    let emailValid = true;
    let passwordValid = true;
    let confirmPasswordValid = true;
    let companyNumberValid = true;

    company.addEventListener('change', (ev) => {

        if (ev.target.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';

        }

    });

    submit.addEventListener('click', (event) => {
        event.preventDefault();

        //username
        if (!(/^([A-Za-z0-9]){3,20}$/gm).test(username.value)) {
            username.style.borderColor = 'red';
            usernameValid = false;
        } else {
            username.style.border = 'none';
        }

        //email
        if (!(/^(.+@(.+)?\.(.+)?)$/gm).test(email.value)) {
            email.style.borderColor = 'red';
            emailValid = false;
        } else {
            email.style.border = 'none';
        }

        //password
        if (!(/^(\w{5,15})$/gm).test(password.value)) {
            password.style.borderColor = 'red';
            passwordValid = false;
        } else {
            password.style.border = 'none';
        }

        //confirmPassword
        if (!(/^(\w{5,15})$/gm).test(confirmPassword.value)) {
            confirmPassword.style.borderColor = 'red';
            confirmPasswordValid = false;
        } else {
            confirmPassword.style.border = 'none';
        }

        if (password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            confirmPasswordValid = false;
        }


        if (company.checked) {
            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumberValid = true;
            } else {
                companyNumber.style.borderColor = 'red'
                companyNumberValid = false;
            }
            if (usernameValid && emailValid && passwordValid && confirmPasswordValid && companyNumberValid) {
                document.querySelector('#valid').style.display = 'block'
            }
        } else {
            if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
                document.querySelector('#valid').style.display = 'block'
            }
        }

    })

}
