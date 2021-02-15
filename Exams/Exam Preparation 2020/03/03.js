class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({ firstName, lastName, personalId }) {
        let customer = this.allCustomers.find(x => x.personalId == personalId)

        if (customer) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }

        let obj = {
            firstName,
            lastName,
            personalId
        }

        this.allCustomers.push(obj)

        return obj
    }


    depositMoney(personalId, amount) {
        let customer = this.getCustomerId(personalId)

        if (customer.totalMoney) {
            customer.totalMoney += amount
        } else {
            customer.totalMoney = amount
            customer.transactions = []
        }
        customer.transactions.push(
            `${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`
        )

        return `${customer.totalMoney}$`
    }


    withdrawMoney(personalId, amount) {
        let customer = this.getCustomerId(personalId)

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        } else {
            customer.totalMoney -= amount
            customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)
        }


        return `${customer.totalMoney}$`
    }

    customerInfo(personalId) {
        let customer = this.getCustomerId(personalId)

        let result = `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$\n`
        
        if (customer.transactions.length > 0) {
            result += `Transactions:\n`
            for (let i = customer.transactions.length; i > 0; i--) {
                result += `${i}. ${customer.transactions[i - 1]}\n`;
            }
        }
        return result.trim();
    }

    getCustomerId(personalId) {
        let customer = this.allCustomers.find(x => x.personalId == personalId)

        if (!customer) {
            throw new Error(`We have no customer with this ID!`)
        }

        return customer
    }

}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));



// /'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdraw 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!'
// /'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!'