function heroicInventory(input) {
    let heroes = {};
    let array = [];
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        items = items ? items.split(', ') : items = []
        if (!heroes.name != name) {
            heroes = {
                name,
                level: 0,
                items: [],
            }
        }

        heroes.level = Number(level);
        heroes.items.push(...items);

        array.push(heroes);
    }

    return JSON.stringify(array)

}

console.log(heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
));
console.log('--------');
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
