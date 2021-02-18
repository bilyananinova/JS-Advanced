class Vacationer {
    constructor(fullName, creditCard, wishList) {

        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            cardNumber: 1111, expirationDate: '', securityNumber: 111
        };
        if (creditCard !== undefined) {
            this.addCreditCardInfo(creditCard);
        }
        this.wishList = [];
    }

    get fullName() {
        return this._fullName
    }

    set fullName(names) {
        let [firstName, middleName, lastName] = names
        if (names.length != 3) {
            throw new Error('Name must include first name, middle name and last name')

        }
        if ((/^[A-Z][a-z]+$/).test(firstName) == false ||
            (/^[A-Z][a-z]+$/).test(middleName) == false ||
            (/^[A-Z][a-z]+$/).test(lastName) == false) {
            throw new Error('Invalid full name')
        }

        return this._fullName = { firstName, middleName, lastName }
    }

    generateIDNumber() {
        let firstNameLetter = this.fullName.firstName.charCodeAt([0])
        let middleNameLength = this.fullName.middleName.length
        this.idNumber = 231 * firstNameLetter + 139 * middleNameLength
        let lastChar = this.fullName.lastName[this._fullName.lastName.length - 1]
        let vowels = ["a", "e", "o", "i", "u"]
        if (vowels.includes(lastChar)) {
            this.idNumber += '8'
        } else {
            this.idNumber += '7'
        }

        return this.idNumber
    }


    addCreditCardInfo(input) {

        let [cardNumber, expirationDate, securityNumber] = input

        if (input.length < 3) {
            throw new Error('Missing credit card information')
        } else {
            if (typeof cardNumber != 'number' || typeof securityNumber != 'number') {
                throw new Error('Invalid credit card details')
            } else {
                this.creditCard = { cardNumber: cardNumber, expirationDate: expirationDate, securityNumber: securityNumber }
            }
            return this.creditCard
        };
    }



    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist')
        }

        this.wishList.push(destination)
        this.wishList.sort((a, b) => a.length - b.length)

        return this.wishList
    }


    getVacationerInfo() {

        let result = [`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`]
        result.push(`ID Number: ${this.idNumber}`)
        result.push(`Wishlist:`)
        if (this.wishList.length > 0) {
            result.push(`${this.wishList.join(', ')}`)
        } else {
            result.push(`empty`)
        }
        result.push(`Credit Card:`)
        result.push(`Card Number: ${this.creditCard.cardNumber}`)
        result.push(`Expiration Date: ${this.creditCard.expirationDate}`)
        result.push(`Security Number: ${this.creditCard.securityNumber}`)

        return result.join('\n')
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


//return `Name: ${ this.fullName.firstName } ${ this.fullName.middleName } ${ this.fullName.lastName } \nID Number: ${ this.idNumber } \nWishlist: \n${ this.wishList } \nCredit Card: \nCard Number: ${ this.creditCard.cardNumber } \nExpiration Date: ${ this.creditCard.expirationDate } \nSecurity Number: ${ this.creditCard.securityNumber } `
//return `Name: ${ this.fullName.firstName } ${ this.fullName.middleName } ${ this.fullName.lastName } \nID number: ${ this.idNumber } \nWishlist: \n${ this.wishList } \nCredit Card: \nCard Number: ${ this._creditCard.cardNumber } \nExpiration Date: ${ this._creditCard.expirationDate } \nSecurity Number: ${ this._creditCard.securityNumber } `
