function solve() {
    let [gray, orange, yellow, green] = document.getElementsByTagName('section')
    let addBtn = document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault()

        let task = document.getElementById('task')
        let description = document.getElementById('description')
        let date = document.getElementById('date')

        if (task.value == '' || description.value == '' || date.value == '') {
            return
        }

        let article = create('article')
        let h3 = create('h3', `${task.value}`)
        let pDescription = create('p', `Description: ${description.value}`)
        let pDate = create('p', `Due Date: ${date.value}`)
        let div = create('div', '', 'class=flex')
        let startBtn = create('button', 'Start', 'class=green')
        let deleteBtn = create('button', 'Delete', 'class=red')

        orange.querySelectorAll('div')[1].appendChild(append(
            article,
            h3,
            pDescription,
            pDate,
            append(div, startBtn, deleteBtn)))

        startBtn.addEventListener('click', () => {
            yellow.querySelectorAll('div')[1].appendChild(article)
            startBtn.remove()
            let finishBtn = create('button', 'Finish', 'class=orange')
            append(div, finishBtn)

            finishBtn.addEventListener('click', () => {
                green.querySelectorAll('div')[1].appendChild(article)
                div.remove()

            })
        })

        deleteBtn.addEventListener('click', () => {
            article.remove()
        })

        task.value = ''
        description.value = ''
        date.value = ''

    })


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

    function append(parent, ...children) {
        while (children.length) {
            parent.appendChild(children.shift())
        }

        return parent
    }

}