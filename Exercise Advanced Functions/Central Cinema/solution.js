function solve() {

    let container = document.querySelector('#container');
    let input = container.querySelectorAll('input');

    let onScreenBtn = container.querySelector('button')
    onScreenBtn.addEventListener('click', addmovie);
    let movieSection = document.querySelector('#movies');
    let archiveSection = document.querySelector('#archive ul');
    let clearBtn = document.querySelector('#archive button')
    clearBtn.addEventListener('click', () => {
        let parent = document.querySelector('#archive ul')
        Array.from(parent.querySelectorAll('li')).forEach(li => {
            parent.removeChild(li)
        })
    });

    function addmovie(event) {
        event.preventDefault();
        let name = input[0];
        let hall = input[1];
        let price = input[2];

        if (name.value == '' || hall.value == '' || price.value == '' || Number.isNaN(Number(price.value))) {
            return
        }

        let liElement = create('li');
        //name
        let spanName = create('span', name.value);

        //hall 
        let strongHall = create('strong', `Hall: ${hall.value}`);

        liElement.appendChild(spanName);
        liElement.appendChild(strongHall);

        //price
        let divPriceElement = create('div');
        let strongPrice = create('strong', Number(price.value).toFixed(2));
        let inputTicket = create('input');
        inputTicket.setAttribute('placeholder', 'Tickets Sold');

        //archive button
        let archiveBtn = create('button', 'Archive');
        archiveBtn.addEventListener('click', archiveMovie);
        divPriceElement.appendChild(strongPrice);
        divPriceElement.appendChild(inputTicket);
        divPriceElement.appendChild(archiveBtn);


        liElement.appendChild(divPriceElement);
        movieSection.querySelector('ul').appendChild(liElement);
        name.value = '';
        hall.value = '';
        price.value = '';

        function archiveMovie(event) {
            let ticketsSold = inputTicket.value;

            if (ticketsSold == '' || Number.isNaN(Number(ticketsSold))) {
                return;
            }

            let total = Number(strongPrice.innerHTML) * ticketsSold;

            let liArchive = create('li')
            let spanArchive = create('span', spanName.innerHTML)
            let strongArchive = create('strong', `Total amount: ${total.toFixed(2)}`)
            let deleteBtn = create('button', 'Delete')
            deleteBtn.addEventListener('click', deleteChild)

            liArchive.appendChild(spanArchive)
            liArchive.appendChild(strongArchive)
            liArchive.appendChild(deleteBtn)
            archiveSection.appendChild(liArchive)

            movieSection.querySelector('ul').removeChild(liElement)
            inputTicket.value = '';

        }

    }

    function deleteChild(event) {
        archiveSection.removeChild(event.target.parentNode)
    }

    function create(type, content) {
        let element = document.createElement(type)
        element.textContent = content
        return element
    }

}


