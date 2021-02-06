function solve() {

    let sections = document.getElementsByTagName('section')
    let addBtn = document.getElementById('add').addEventListener('click', addTask)

    function addTask(event) {
        event.preventDefault();
        let inputTask = document.getElementById('task');
        let descriptionTask = document.getElementById('description');
        let date = document.getElementById('date');

        if (!inputTask.value || !descriptionTask.value || !date.value) {
            return;
        }

        let div = sections[1].children[1]
        let article = create('article')

        //heading in Add Task section
        let headingTask = create('h3', inputTask.value)
        article.appendChild(headingTask)
        inputTask.value = ''

        //description in Add Task section
        let descriptionP = create('p', `Description: ${descriptionTask.value}`)
        article.appendChild(descriptionP)
        descriptionTask.value = ''

        //date in Add Task section 
        let dateP = create('p', `Due Date: ${date.value}`)
        article.appendChild(dateP)
        date.value = ''

        //buttons in Add Task section
        let divBtns = create('div')
        divBtns.setAttribute('class', 'flex')
        article.appendChild(divBtns)

        let startBtn = create('button', 'Start')
        startBtn.setAttribute('class', 'green')
        divBtns.appendChild(startBtn)
        startBtn.addEventListener('click', taskInProgres)

        let deleteBtn = create('button', 'Delete')
        deleteBtn.setAttribute('class', 'red')
        divBtns.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', () => {
            div.removeChild(article)
        })

        div.appendChild(article)

        function taskInProgres(event) {
            let divInProgress = document.getElementById('in-progress')

            let articleInProgress = create('article')

            //heading Task in Progress section
            let headingInProgress = create('h3', headingTask.innerHTML)
            articleInProgress.appendChild(headingInProgress)

            //description Task in Progress section
            let descriptionPInProgress = create('p', `${descriptionP.innerHTML}`)
            articleInProgress.appendChild(descriptionPInProgress)

            //date Task in Progress section
            let datePInProgress = create('p', `${dateP.innerHTML}`)
            articleInProgress.appendChild(datePInProgress)


            //buttons in Progress section
            let divBtnsInProgress = create('div')
            divBtnsInProgress.setAttribute('class', 'flex')
            articleInProgress.appendChild(divBtnsInProgress)

            let deleteBtnInProgress = create('button', 'Delete')
            deleteBtnInProgress.setAttribute('class', 'red')
            divBtnsInProgress.appendChild(deleteBtnInProgress)
            deleteBtnInProgress.addEventListener('click', () => {
                divInProgress.removeChild(articleInProgress)
            })

            let finishBtnInProgress = create('button', 'Finish')
            finishBtnInProgress.setAttribute('class', 'orange')
            divBtnsInProgress.appendChild(finishBtnInProgress)
            finishBtnInProgress.addEventListener('click', completeTask)

            divInProgress.appendChild(articleInProgress)

            div.removeChild(article)

            
            function completeTask(event) {
                let divComplete = sections[3].children[1]
                
                let articleComplete = create('article')
                
                //heading in Complete section 
                let headingComplete = create('h3', headingInProgress.innerHTML)
                articleComplete.appendChild(headingComplete)
                
                //description in Complete section 
                let descriptionPComplete = create('p', `${descriptionPInProgress.innerHTML}`)
                articleComplete.appendChild(descriptionPComplete)
                
                //date in Complete section 
                let datePComplete = create('p', `${datePInProgress.innerHTML}`)
                articleComplete.appendChild(datePComplete)
                
                divComplete.appendChild(articleComplete)
                
                divInProgress.removeChild(articleInProgress)
            }
        }

    }

    function create(type, content) {
        let element = document.createElement(type)
        element.textContent = content
        return element
    }
}