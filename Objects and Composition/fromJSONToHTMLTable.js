function fromJSONToHTMLTable(input) {
    let html = '<table>\n';
    let keys = JSON.parse(input);

    html += `   <tr>`;
    for (const key of keys) {
        for (const k of Object.keys(key)) {
            html += `<th>${k}</th>`;
        }
        break;
    }
    html += `</tr>\n`;



    for (let value of Object.values(keys)) {
        html += `   <tr>`;
        let line = Object.values(value);
        line.forEach(element => {
            html += `<td>${escape(element)}</td>`;
        });
        html += `</tr>\n`;
    }


    function escape(element) {
        let type = typeof element;

        if (type !== 'number') {
            return element
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
        } else {
            return element
        }

    }

    html += '</table>';


    return html
}

console.log(fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'));

console.log(fromJSONToHTMLTable([{ "Name": "Pesho", "Score": 4, "Grade": "8" }, { "Name": "Gosho", "Score": 5, "Grade": "8" }, { "Name": "Angel", "Score": 5.5, "Grade": "10" }]));
