function addItem() {
    let newListItem = document.createElement('li');
    let input = document.getElementById('newItemText');
    newListItem.textContent = input.value;
    let parentElement = document.getElementById('items');
    parentElement.appendChild(newListItem);
    input.value = '';
}

// function addItem() {
//     let newListItem = document.createElement('li');
//     let input = document.getElementById('newItemText');
//     newListItem.textContent = input.value;
//     let parentElement = document.getElementById('items');
//     parentElement.append(newListItem);
//     input.value = '';
// }
