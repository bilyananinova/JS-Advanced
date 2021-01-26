function validate() {
    document.getElementById('email').addEventListener('change', isChanged)
    const regex = /[a-z]+@[a-z]+\.[a-z]+/gm;

    function isChanged(event) {
        let email = event.target
        let match = email.value.match(regex)

        if (match == null) {
            email.className = 'error'
        } else {
            email.className = ''
        }
    }

}