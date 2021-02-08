class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.box = this._initialize();
        this.online = false;
    }
    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if ( this._online == true) {
            this.divTitle.classList.add('online');
        } else if (this.divTitle) {
            this.divTitle.classList.remove('online');
        }
    }


    _initialize() {
        let article = document.createElement('article')

        //create div title with name and info btn
        let divTitle = document.createElement('div')
        divTitle.classList.add('title')
        divTitle.textContent = `${this.firstName} ${this.lastName}`
        this.divTitle = divTitle
        // info btn
        let btnInfo = document.createElement('button')
        btnInfo.innerHTML = `&#8505;`
        btnInfo.addEventListener('click', more)
        divTitle.appendChild(btnInfo)

        //create div info
        let divInfo = document.createElement('div')
        divInfo.classList.add('info')
        divInfo.style.display = 'none'

        //create span btn phone
        let spanPhone = document.createElement('span')
        spanPhone.innerHTML = `&phone; ${this.phone}`
        divInfo.appendChild(spanPhone)
        //create span btn email
        let spanEmail = document.createElement('span')
        spanEmail.innerHTML = `&#9993; ${this.email}`
        divInfo.appendChild(spanEmail)

        article.appendChild(divTitle)
        article.appendChild(divInfo)

        return article

        function more(ev) {
            divInfo.style.display = divInfo.style.display === 'block' ? 'none' : 'block';
        }

    }

    render(id) {
        document.getElementById(id).appendChild(this.box);

    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);


