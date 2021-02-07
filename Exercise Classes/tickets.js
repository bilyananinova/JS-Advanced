function tickets(input, criteria) {

    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (const ticket of input) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    }

    if (criteria != 'price') {
        return result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    } else {
        return result.sort((a, b) => a[criteria] - b[criteria]);
    }
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log('---------');

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));

console.log('---------');

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));