class Vacationer {
    constructor(fullName, creditCard, wishList) {

        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = this.addCreditCardInfo(creditCard)
        this.wishList = [];
    }

    get fullName() {
        return this._fullName
    }

    set fullName(names) {
        let [firstName, middleName, lastName] = names
        if (firstName !== '' && middleName !== '' && lastName !== '') {
            if ((/^[A-Z][a-z]+$/).test(firstName) && (/^[A-Z][a-z]+$/).test(middleName) && (/^[A-Z][a-z]+$/).test(lastName)) {
                return this._fullName = {
                    firstName,
                    middleName,
                    lastName
                }
            } else {
                throw new Error('Invalid full name')
            }
        } else {
            throw new Error('Name must include first name, middle name and last name')
        }


    }

    generateIDNumber() {

        this._idNumber = 231 * this.fullName.firstName.charCodeAt([0]) + 139 * this._fullName.middleName.length
        let lastChar = this.fullName.lastName[this._fullName.lastName.length - 1]
        let vowels = ["a", "e", "o", "i", "u"]
        if (vowels.includes(lastChar)) {
            this._idNumber += '8'
        } else {
            this._idNumber += '7'
        }

        return this._idNumber

    }

    addCreditCardInfo(input) {
        if (input != undefined) {
            input = Array.from(input)
            if (input.length != 3) {
                throw new Error('Missing credit card information')
            } else {
                if (typeof input[0] != 'number' || typeof input[2] != 'number') {
                    throw new Error('Invalid credit card details')
                } else {

                    return this._creditCard = {
                        cardNumber: input[0],
                        expirationDate: input[1],
                        securityNumber: input[2],
                    }
                }
            }

        } else {
            return this._creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111,
            }
        }

    }

    addDestinationToWishList(destination) {

        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist')
        } else {
            this.wishList.push(destination)
            this.wishList.sort((a, b) => a.length - b.length)
        }
    }

    getVacationerInfo() {

        this.wishList = this.wishList.length > 0 ? this.wishList.join(', ') : 'empty'
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${this.wishList}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`
    }

}


// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());


//return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${this.wishList}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`
//return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID number: ${this.idNumber}\nWishlist:\n${this.wishList}\nCredit Card:\nCard Number: ${this._creditCard.cardNumber}\nExpiration Date: ${this._creditCard.expirationDate}\nSecurity Number: ${this._creditCard.securityNumber}`
