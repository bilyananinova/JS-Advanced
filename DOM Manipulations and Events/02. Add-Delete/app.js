function addItem() {
    //create li
    let input = document.getElementById('newText');
    let liElement = createElement('li', input.value);
    document.getElementById('items').appendChild(liElement);

    //create a href
    let aElement = createElement('a', '[Delete]');
    aElement.href = '#';
    liElement.appendChild(aElement);

    //create remove event
    aElement.addEventListener('click', (event) => {
        event.target.parentNode.remove()
    })

    input.value = '';

    function createElement(type, content) {
        let element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}