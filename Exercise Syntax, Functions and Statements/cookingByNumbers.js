function cookingByNumbers(num, a, b, c, d, e) {
    num = Number(num);

    let list = [a, b, c, d, e];

    for (const operation of list) {
        if (operation == 'chop') {
            num /= 2;
        } else if (operation == 'dice') {
            num = Math.sqrt(num);
        } else if (operation == 'spice') {
            num++;
        } else if (operation == 'bake') {
            num *= 3;
        } else if (operation == 'fillet') {
            num *= 0.80;
        }

        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
