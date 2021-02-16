function solve() {
    let container = document.getElementById('container')
    let [name, age, kind, currentOwner] = container.getElementsByTagName('input')
    let [adoption, adopted] = document.querySelectorAll('section ul')
    let addBtn = container.getElementsByTagName('button')[0]

    addBtn.addEventListener('click', addInfo)

    function addInfo(ev) {
        ev.preventDefault()

        if (name.value == '' || age.value == '' || kind.value == '' || currentOwner.value == '') {
            return
        }

        if (isNaN(Number(age.value))) {
            return
        }

        let li = create('li')
        let p = create('p')
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`
        let span = create('span', `Owner: ${currentOwner.value}`)
        let cntBtn = create('button', 'Contact with owner')
        
        li.appendChild(p)
        li.appendChild(span)
        li.appendChild(cntBtn)
        adoption.appendChild(li)
        cntBtn.addEventListener('click', changeBtn)

        function changeBtn(e) {
            cntBtn.remove()
            let divBtn = create('div')
            let input = create('input', '', 'placeholder=Enter your names')
            let yesBtn = create('button', 'Yes! I take it!')
            divBtn.appendChild(input)
            divBtn.appendChild(yesBtn)
            li.appendChild(divBtn)
            yesBtn.addEventListener('click', newHome)

            function newHome(ev) {
                if (input.value == '') {
                    return
                }

                adopted.appendChild(li)
                divBtn.remove()
                span.remove()
                let newOwner = create('span', `New Owner: ${input.value}`)
                let checkedBtn = create('button', 'Checked')
                li.appendChild(newOwner)
                li.appendChild(checkedBtn)
                checkedBtn.addEventListener('click', () => {
                    li.remove()
                })

            }
        }

    }

    function create(type, content, attribute) {
        let element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }
        if (attribute) {
            let [type, value] = attribute.split('=')
            element.setAttribute(type, value)
        }
        return element;
    }

}

