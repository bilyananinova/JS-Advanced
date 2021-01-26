function deleteByEmail() {
    let rows = [...document.querySelectorAll('tbody tr')];
    let input = document.querySelector('input[name="email"]').value;

    let deleted = false;
    for (const row of rows) {
        let emailCell = row.children[1];

        if (emailCell.textContent == input.trim()) {
            row.parentNode.removeChild(row)
            deleted = true;
            document.getElementById('result').textContent = 'Deleted.'
        }
    }
    if (deleted == false) {
        document.getElementById('result').textContent = 'Not found.'
    }
}