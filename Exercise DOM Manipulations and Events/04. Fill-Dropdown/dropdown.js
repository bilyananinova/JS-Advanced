function addItem() {
    let text = document.querySelector('#newItemText');
    let value = document.querySelector('#newItemValue');

    let optionTag = document.createElement('option');
    optionTag.textContent = text.value;
    optionTag.setAttribute('value', value.value);
    document.querySelector('#menu').appendChild(optionTag);


    text.value = ''
    value.value = ''
}