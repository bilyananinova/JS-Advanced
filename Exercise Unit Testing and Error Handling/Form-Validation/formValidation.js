function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let checkbox = document.getElementById('company')
    let number = document.getElementById('companyNumber');

    let usernameIsValid;
    let emailIsValid;
    let passwordIsValid;
    let confirmPasswordIsValid;
    let companyNumberIsValid;

    checkbox.addEventListener('change', (ev) => {

        if (ev.target.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';

        }

    });

    document.getElementById('submit').addEventListener('click', onClick)


    function onClick(event) {
        event.preventDefault();

        //username
        if (!(/^[a-zA-Z0-9]{3,20}$/gm).test(username.value)) {
            username.style.borderColor = 'red'
        } else {
            usernameIsValid = true;
            username.style.border = 'none'
        }

        //email
        if (!(/^\w*@\w*\.[\w\.]*$/gm).test(email.value)) {
            email.style.borderColor = 'red'
        } else {
            emailIsValid = true;
            email.style.border = 'none'
        }

        //password
        if (!(/^\w{5,15}$/gm).test(password.value)) {
            password.style.borderColor = 'red';
        } else {
            passwordIsValid = true;
            password.style.border = 'none';
        }

        //confirmPassword
        if (!(/^\w{5,15}$/gm).test(confirmPassword.value)) {
            confirmPassword.style.borderColor = 'red';
        } else {
            confirmPasswordIsValid = true;
            confirmPassword.style.border = 'none';
        }

        if (password.value !== confirmPassword.value || !password.value || !confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }

        //checkbox
        if (checkbox.checked) {
            if (Number(number.value) <= 9999 && Number(number.value) >= 1000) {
                number.style.border = 'none';
                companyNumberIsValid = true;
            } else {
                number.style.borderColor = 'red';
            }
        }


        if (usernameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid && companyNumberIsValid) {
            document.getElementById('valid').style.display = 'block'
        }


    }

}