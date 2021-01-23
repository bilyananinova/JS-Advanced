function colorize() {

    let rows = [...document.querySelectorAll('tr:nth-child(even)')];
    rows.forEach(row => row.style.background = 'teal');

}