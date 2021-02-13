function solution() {
    let [addGiftSection, listOfSection, sentGiftstSection, discardedGiftsSection] = document.querySelectorAll('.card')
    let addBtn = addGiftSection.children[1].children[1];
    addBtn.addEventListener('click', addGift)

    function addGift(event) {
        event.preventDefault()
        let addInput = addGiftSection.getElementsByTagName('input')[0]
        let name = addInput.value

        let li = create('li', name)
        li.setAttribute('class', 'gift')
        let sendBtn = create('button', 'Send')
        sendBtn.setAttribute('id', 'sendButton')
        li.appendChild(sendBtn)
        let discardBtn = create('button', 'Discard')
        discardBtn.setAttribute('id', 'discardButton')
        li.appendChild(discardBtn)
        let ulList = listOfSection.querySelector('ul')
        ulList.appendChild(li)

        Array.from(ulList.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => ulList.appendChild(li));

        sendBtn.addEventListener('click', () => {
            let ulSent = sentGiftstSection.querySelector('ul')
            let liSent = create('li', name)
            liSent.setAttribute('class', 'gift')
            ulSent.appendChild(liSent)
            li.remove()
        })

        discardBtn.addEventListener('click', () => {
            console.log(discardBtn);
            let ulDiscard = discardedGiftsSection.querySelector('ul')
            console.log(ulDiscard);
            let liDiscard = create('li', name)
            liDiscard.setAttribute('class', 'gift')
            ulDiscard.appendChild(liDiscard)
            li.remove()
        })

        addInput.value = ''

    }

    function create(type, content) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }

}