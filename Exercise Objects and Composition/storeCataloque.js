function storeCataloque(input) {

    let cataloque = {};

    for (const line of input) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        cataloque[name] = price;
    }

    let sort = Object.keys(cataloque).sort((a, b) => a.localeCompare(b));

    let letter = '';
    for (const key of sort) {
        
        if(key[0] != letter) {
            letter = key[0];
            console.log(letter);
        }

        console.log(`  ${key}: ${cataloque[key]}`);
    }
}

storeCataloque(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
)

console.log('-------');

storeCataloque(
    [
        'Banana : 2',
        "Rubic's Cube : 5",
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]
)
