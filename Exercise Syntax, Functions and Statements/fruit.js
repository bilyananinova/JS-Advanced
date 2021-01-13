function fruits(fruit, weightGr, price) {
    
    let weight = weightGr / 1000;
    let money = price * weight;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);

}

fruits('orange', 2500, 1.80);
console.log('-----');
fruits('apple', 1563, 2.35);
