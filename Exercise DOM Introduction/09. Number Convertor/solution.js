function solve() {

    let input = document.getElementById('input');
    let selectMenu = document.querySelector('#selectMenuTo');
    document.querySelector('button')
        .addEventListener('click', () => {
            if (selectMenu.children[1].selected == true) {
                
                input = Number(input.value).toString(2)

            } else if (selectMenu.children[2].selected == true) {

                input = Number(input.value).toString(16).toUpperCase();
            }


            document.querySelector('#result').value = input
        });


    let binary = createElement('option', 'Binary', 'value', 'binary')
    selectMenu.appendChild(binary);
    let hexadecimal = createElement('option', 'Hexadecimal', 'value', 'hexadecimal')
    selectMenu.appendChild(hexadecimal);

    function createElement(type, content, atributeType, atributeContent) {
        let element = document.createElement(type);
        element.textContent = content;
        element.setAttribute(atributeType, atributeContent);
        return element
    }

}