function solve() {

    let trainings = document.getElementsByClassName('modules')[0]
    let [lectureName, lectureData] = document.getElementsByTagName('input')
    let addBtn = document.querySelector('.form-control > button')
    let selects = document.querySelector('.form-control > select')

    addBtn.addEventListener('click', addLecture)
    let listModules = [];

    function addLecture(ev) {
        ev.preventDefault()

        // if(lectureName.value == '' || lectureData.value  == ''|| selects.value == 'Select module' ) {
        //     return;
        // }

        let [date, hour] = lectureData.value.split('-').join('/').split('T')

        let div = undefined
        let ul = undefined
        let h4 = undefined
        let li = undefined
        let delBtn = undefined

        if (listModules.includes(selects.value) == false) {
            div = create('div', '', 'class=module')
            div.classList.add(selects.value)
            let h3 = create('h3', `${selects.value.toUpperCase()}-MODULE`)
            div.appendChild(h3)

            ul = create('ul')
            li = create('li', '', 'class=flex')
            li.class = date
            h4 = create('h4', `${lectureName.value} - ${date} - ${hour}`)
            delBtn = create('button', 'Del', 'class=red')

            ul.appendChild(li)
            li.appendChild(h4)
            li.appendChild(delBtn)
            div.appendChild(ul)
            trainings.appendChild(div)

            listModules.push(selects.value)
        } else {
            div = document.getElementsByClassName(selects.value)[0]
            ul = div.getElementsByTagName('ul')[0]

            li = create('li', '', 'class=flex')
            li.class = date
            h4 = create('h4', `${lectureName.value} - ${date} - ${hour}`)
            delBtn = create('button', 'Del', 'class=red')
            ul.appendChild(li)
            li.appendChild(h4)
            li.appendChild(delBtn)
            div.appendChild(ul)
            sort(ul)
        }

        delBtn.addEventListener('click', deleteLecture)
    }

    function deleteLecture(ev) {
        let li = ev.target.parentNode
        let ul = li.parentNode
        li.remove()
        console.log(Array.from(ul.getElementsByTagName("LI")));
        
        if (Array.from(ul.getElementsByTagName("LI")).length == 0) {
            ul.parentNode.remove()

        }
    }

    function sort(ul) {

        let arr = Array.from(ul.getElementsByTagName("LI"))
        let sort = arr.sort((a, b) => a.class.localeCompare(b.class))
        sort.forEach(li => ul.appendChild(li));
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

};