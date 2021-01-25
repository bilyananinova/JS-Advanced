function toggle() {
    document.getElementById('extra').style.display =
        document.getElementById('extra').style.display == 'block'
            ? document.getElementById('extra').style.display = 'none'
            : document.getElementById('extra').style.display = 'block'
    let button = document.getElementsByClassName('button')[0].innerHTML
    button = button == 'More' ? 'Less' : 'More';
    document.getElementsByClassName('button')[0].innerHTML = button
}