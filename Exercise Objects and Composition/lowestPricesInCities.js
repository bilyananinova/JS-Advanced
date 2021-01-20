function lowestPricesInCities(input) {
    let products = {};

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products[product] || products[product].price > price) {
            products[product] = {
                town,
                price
            };
        }
    }

    Object.keys(products).forEach(el => {
        console.log(`${el} -> ${products[el].price} (${products[el].town})`);
    })
}

lowestPricesInCities(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
);
console.log('-----------');
lowestPricesInCities(
    ['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000']
);
