function solve() {

    let [book, year, price] = document.querySelectorAll('input')
    let [oldbook, newbook] = document.querySelectorAll('.selected > div')
    let h1 = document.querySelectorAll('h1')[1]
    let total = 0;
    let addBtn = document.querySelector('button')
    addBtn.addEventListener('click', buyBook)

    function buyBook(ev) {
        ev.preventDefault();

        if (!book.value || !year.value || !price.value) {
            return
        }

        if (Number(year.value) < 0 || Number(price.value) < 0) {
            return
        }

        let curPrice = 0;
        if (Number(year.value) < 2000) {
            curPrice = Number(price.value) * 0.85;
        } else {
            curPrice = Number(price.value)
        }

        let divBook = create('div', ['class=book'])
        let p = create('p', '', `${book.value} [${year.value}]`)
        let btnBuy = create('button', '', `Buy it only for ${curPrice.toFixed(2)} BGN`)
        let btnMove = create('button', '', `Move to old section`)

        btnBuy.addEventListener('click', buy)
        btnMove.addEventListener('click', moveBook)

        if (Number(year.value) >= 2000) {

            divBook.appendChild(p)
            divBook.appendChild(btnBuy)
            divBook.appendChild(btnMove)
            newbook.appendChild(divBook)

        } else {
            divBook.appendChild(p)
            divBook.appendChild(btnBuy)
            oldbook.appendChild(divBook)

        }

        function buy(ev) {
            total += curPrice

            h1.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
            ev.target.parentNode.remove()

        }

        function moveBook(ev) {
            curPrice *= 0.85
            btnBuy.textContent = `Buy it only for ${curPrice.toFixed(2)} BGN`
            oldbook.appendChild(ev.target.parentNode)
            btnMove.remove()
            console.log(ev.target);
        }

        book.value = ''
        year.value = ''
        price.value = ''

    }


    function create(type, attributes, content) {
        let element = document.createElement(type);

        if (attributes) {
            while (attributes.length) {
                let [type, value] = attributes.shift().split('=');
                element.setAttribute(type, value);
            }
        }

        if (content) {
            element.innerHTML = content;
        }

        return element;
    }
}

// expected '<p>The Nickel Boys [2016]</p><button>Buy it only for 16.898 BGN</button>' 
// to equal '<p>The Nickel Boys [2016]</p><button>Buy it only for 16.90 BGN</button>'