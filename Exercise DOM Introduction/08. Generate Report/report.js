function generateReport(colNames) {

    let rows = [...document.querySelectorAll('tbody tr')];
    let headers = [...document.querySelectorAll('th')];
    let output = document.getElementById('output');

    let checked = [];
    let result = [];

    headers.forEach(header => {
        let checkbox = header.firstElementChild;
        if (checkbox.checked) {
            checked.push(header.cellIndex);
            checkbox.checked = false;
        }
    });

    rows.forEach(row => {
        let obj = {};

        checked.forEach(el => {
            let key = headers[el].firstElementChild.name
            let value = row.cells[el].textContent
            obj[key] = value
        })

        result.push(obj)
    })

    output.value = JSON.stringify(result,)
}