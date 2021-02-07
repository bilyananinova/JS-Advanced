function juiceFlavors(array) {
    let juices = new Map();
    let bottles = new Map();
    array.forEach(juice => {
        let [fruit, qty] = juice.split(' => ')
        if (!juices.has(fruit)) {
            juices.set(fruit, 0);
        }

        juices.set(fruit, juices.get(fruit) + Number(qty))

        if (juices.get(fruit) >= 1000) {

            let bottle = Math.floor(juices.get(fruit) / 1000)
            juices.set(fruit, juices.get(fruit) - bottle * 1000)

            if (!bottles.has(fruit)) {
                bottles.set(fruit, 0)
            }

            bottles.set(fruit, bottles.get(fruit) + bottle)
        }

    })

    Array.from(bottles).forEach(juice => {
        console.log(`${juice[0]} => ${juice[1]}`);
    })


}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

console.log('*'.repeat(50));

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)