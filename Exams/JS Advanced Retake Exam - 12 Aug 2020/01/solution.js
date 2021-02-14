function solve() {

    let [name, hall, price] = document.getElementsByTagName('input')
    let [onScreenBtn, clearBtn] = document.getElementsByTagName('button')

    clearBtn.addEventListener('click', ()=> {
        let parent = document.querySelector('#archive ul')
        Array.from(parent.querySelectorAll('li')).forEach(li => {
            parent.removeChild(li)
        })
    });

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!name.value || !hall.value || !price.value || !Number(price.value)) {
            return;
        }

        let ul = document.querySelector('#movies > ul')
        let li = create('li')
        let span = create('span', name.value)
        let strong = create('strong', `Hall: ${hall.value}`)
        let div = create('div')
        let strongPrice = create('strong', Number(price.value).toFixed(2))
        let input = create('input', '', 'placeholder=Tickets Sold')
        let archBtn = create('button', 'Archive')

        ul.appendChild(append(li, span, strong, div))
        li.appendChild(append(div, strongPrice, input, archBtn))

        name.value = ''
        hall.value = ''
        price.value = ''

        archBtn.addEventListener('click', () => {
            if (Number.isNaN(Number(input.value)) || input.value === "") {
                return;
            }

            let liArch = create('li')
            let spanArch = create('span', span.innerHTML)
            let total = Number(input.value) * Number(strongPrice.innerHTML)
            let strongArch = create('strong', `Total amount: ${total.toFixed(2)}`)
            let deleteBtn = create('button', 'Delete')
            document.querySelector('#archive > ul').appendChild(append(liArch, spanArch, strongArch, deleteBtn))
            deleteBtn.addEventListener('click', () => {
                liArch.remove()
            })

            document.querySelector('#movies').querySelector('ul').removeChild(li)
        })
    })

    function append(parent, ...children) {
        while (children.length) {
            parent.appendChild(children.shift())
        }

        return parent
    }

    function create(type, content, attribute) {
        let element = document.createElement(type)

        if (content) {
            element.textContent = content
        }

        if (attribute) {
            let [type, value] = attribute.split('=')
            element.setAttribute(type, value)
        }

        return element
    }
}