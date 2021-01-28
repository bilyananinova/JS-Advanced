function lockedProfile() {

    document.getElementById('main').addEventListener('click', show);

    function show(ev) {
        if (ev.target.tagName == 'BUTTON') {
            let profile = ev.target.parentNode
            let lock = profile.querySelector('input[type=radio]:checked').value == 'lock'

            if (lock == false) {
                let div = profile.querySelector('div')
                div.style.display = div.style.display == 'block' ? 'none' : 'block'
                
                let btn = profile.querySelector('button');
                btn.textContent = btn.textContent == 'Show more' ? 'Hide it' : 'Show more'

            }
        }
    }

}