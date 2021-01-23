function extractText() {
    let elements = Array.from(document.getElementsByTagName('li'));
    let texts = elements.map(e => e.textContent);
    let area = document.getElementById('result');
    area.textContent = texts;
    console.log(elements);
}
