function encodeAndDecodeMessages() {
    let main = document.querySelector('#main');
    let textareas = main.getElementsByTagName('textarea');
    let input = textareas[0];
    let output = textareas[1];

    let buttons = main.getElementsByTagName('button');
    let encodeBtn = buttons[0].addEventListener('click', encode)
    let decodeBtn = buttons[1].addEventListener('click', decode)

    function encode(event) {
        let encodeMassage = input.value.split('')
            .map(l => l.charCodeAt())
            .map(n => n + 1)
            .map(i => String.fromCharCode(i))
            .join('');
        output.value = encodeMassage;
        input.value = '';
    }

    function decode(event) {
        let decodeMassage = output.value.split('')
            .map(l => l.charCodeAt())
            .map(n => n - 1)
            .map(i => String.fromCharCode(i))
            .join('');
        output.value = decodeMassage;
    }
}