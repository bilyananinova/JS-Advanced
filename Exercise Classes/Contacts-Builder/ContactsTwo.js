class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.contactBox = this._createContact();
        this.online = false

    }

    get online() {
        return this._online
    }

    set online(value) {
        this._online = value
        if (this._online == true) {
           this.title.classList.add('online')
        } else {
            this.title.classList.remove('online')
        }
    }

    _createContact() {
        let article = this.create('article');

        let divTitle = this.create('div', `${this.firstName} ${this.lastName}`, 'title');
        let infoBtn = this.create('button');
        infoBtn.innerHTML = `&#8505;`;
        infoBtn.addEventListener('click', more);
        this.title = divTitle;
        divTitle.appendChild(infoBtn);

        let divInfo = this.create('div', '', 'info');
        let phone = document.createElement('span');
        phone.innerHTML = `&phone; ${this.phone}`
        let email = document.createElement('span', 'innerHTML', '');
        email.innerHTML = `&#9993; ${this.email}`
        divInfo.style.display = 'none'
        divInfo.appendChild(phone);
        divInfo.appendChild(email);

        article.appendChild(divTitle);
        article.appendChild(divInfo);

        function more(event) {

            divInfo.style.display = divInfo.style.display === 'block' ? 'none' : 'block';
        }


        return article

    }


    create(type, content, className) {

        let element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }
        if (className) {
            element.classList.add(className)
        }

        return element
    }

    render(id) {
        document.getElementById(id).appendChild(this.contactBox);
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


