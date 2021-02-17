function solve() {

    let modulesTraining = document.querySelector('.modules')
    let [lectureName, lectureDate] = document.getElementsByTagName('input')
    let moduleName = document.querySelector('.form-control select')
    let addBtn = document.querySelector('.form-control button')
    addBtn.addEventListener('click', add)

    let listOfModules = [];

    function add(ev) {
        ev.preventDefault()

        if (lectureName.value == '' || lectureDate == '' || moduleName.value == 'Select module') {
            return
        }

        let date = lectureDate.value.split('-').join('/').split('T').join(' - ')
        let sortPart = lectureDate.value.split('-').join('/').split('T')[0]
        console.log(sortPart);


        if (listOfModules.includes(moduleName.value) == false) {
            let divModule = create('div', '', 'class=module')
            divModule.classList.add(`${moduleName.value}`)
            let moduleH3 = create('h3', `${moduleName.value.toUpperCase()}-MODULE`)
            divModule.appendChild(moduleH3)
            let ulLectures = create('ul')
            let liLecture = create('li', '', 'class=flex')
            liLecture.id = sortPart
            let moduleH4 = create('h4', `${lectureName.value} - ${date}`)
            let delBtn = create('button', 'Del', 'class=red')
            delBtn.addEventListener('click', delLecture)
            liLecture.appendChild(moduleH4)
            liLecture.appendChild(delBtn)
            ulLectures.appendChild(liLecture)
            divModule.appendChild(ulLectures)
            modulesTraining.appendChild(divModule)
            listOfModules.push(moduleName.value)

        } else {

            let divModule = document.getElementsByClassName(`${moduleName.value}`)[0]
            let ulLectures = divModule.querySelector('ul')
            let liLecture = create('li', '', 'class=flex')
            liLecture.id = sortPart
            let moduleH4 = create('h4', `${lectureName.value} - ${date}`)
            let delBtn = create('button', 'Del', 'class=red')
            delBtn.addEventListener('click', delLecture)
            liLecture.appendChild(moduleH4)
            liLecture.appendChild(delBtn)
            ulLectures.appendChild(liLecture)

            let arr = Array.from(ulLectures.getElementsByTagName("LI"))
            let sort = arr.sort((a, b) => a.id.localeCompare(b.id))
            sort.forEach(li => ulLectures.appendChild(li));
        }

        function delLecture(ev) {
            let li = ev.target.parentNode
            let ul = li.parentNode;
            li.remove()
            if (Array.from(ul.getElementsByTagName("LI")).length == 0) {
                ul.parentNode.remove()

            }
        }
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