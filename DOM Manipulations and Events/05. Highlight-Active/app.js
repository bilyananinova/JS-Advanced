function focus() {

    [...document.querySelectorAll('input')].forEach(div => {
        div.addEventListener('focus', (event) => {
            event.target.parentNode.className = 'focused'
        });

        div.addEventListener('blur', (event) => {
            event.target.parentNode.className = '';
        });
    })

}