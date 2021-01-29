function extract(id) {
    let regex = /\(.+?\)/gm;
    let text = document.getElementById('content').textContent
    let match = regex.exec(text);
    let result = [];
    while (match != null) {
        let word = match[0].slice(1, -1);
        result.push(word)
        match = regex.exec(text);
    }

    return result.join('; ');
}