function validate() {
    let email = document.getElementById('email')
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    email.addEventListener('change', () => {
        if (!regex.test(email.value)) {
            email.setAttribute('class', 'error')
        } else {
            email.value = ''
            email.removeAttribute('class', 'error')

        }
    })
}