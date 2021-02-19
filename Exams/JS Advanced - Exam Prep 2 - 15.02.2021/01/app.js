function solution() {

    let input = document.getElementsByTagName('input')[0]
    let addBtn = document.getElementsByTagName('button')[0]
    addBtn.addEventListener('click', addGift)
    let sections = document.querySelectorAll('.card')
    let [card, list, sent, discard] = Array.from(sections)

    function addGift(ev) {
        ev.preventDefault()
        let listGifts = list.getElementsByTagName('ul')[0]

        let name = input.value
        let li = create('li', `${name}`, 'class=gift')
        let sendBtn = create('button', 'Send', 'id=sendButton')
        let discardBtn = create('button', 'Discard', 'id=discardButton')

        li.appendChild(sendBtn)
        li.appendChild(discardBtn)
        listGifts.appendChild(li)

        sortList(listGifts)

        input.value = ''

        sendBtn.addEventListener('click', sendList)
        discardBtn.addEventListener('click', discardList)
        
        function sendList(ev) {
            let sendGifts = sent.getElementsByTagName('ul')[0]
            let liGrift = create('li', `${name}`, 'class=gift')
            li.remove()
            sendGifts.appendChild(liGrift)
        }

        function discardList(ev) {
            let discardGifts = discard.getElementsByTagName('ul')[0]
            let liGrift = create('li', `${name}`, 'class=gift')
            li.remove()
            discardGifts.appendChild(liGrift)
        }
    }

    function sortList(ul) {

        Array.from(ul.getElementsByTagName("LI"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => ul.appendChild(li));

        return ul
    }

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