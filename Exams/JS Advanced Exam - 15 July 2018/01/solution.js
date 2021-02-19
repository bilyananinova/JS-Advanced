function addSticker() {

    let [title, text] = document.getElementsByTagName('input')
    let ulStickerBoard = document.getElementById('sticker-list')

    let li = create('li', '', 'class=note-content')
    let a = create('a', 'x', 'class=button')
    let h2 = create('h2', `${title.value}`)
    let hr = create('hr')
    let p = create('p', `${text.value}`)

    if (title.value == '' || text.value == '') {
        return;
    }

    li.appendChild(a)
    
    li.appendChild(h2)
    li.appendChild(hr)
    li.appendChild(p)
    ulStickerBoard.appendChild(li)

    a.addEventListener('click', (ev) => {
        li.remove()
    })

    title.value = ''
    text.value = ''

    function create(type, content, attribute) {
        let element = document.createElement(type)

        if (content) {
            element.textContent = content
        }

        if (attribute) {
            let [typeAtr, valueAtr] = attribute.split('=')
            if (typeAtr == 'class') {
                element.classList.add(valueAtr)
            } else {
                element.setAttribute(typeAtr, valueAtr)
            }
        }

        return element
    }


}