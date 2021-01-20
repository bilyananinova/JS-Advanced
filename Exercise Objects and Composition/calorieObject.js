function calorieObject(input) {
    let calorie = {};

    for (let i = 0; i < input.length; i += 2) {
        let key = input[i];
        let value = Number(input[i + 1]);

        calorie[key] = value
    }

    return calorie;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log('--------');
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
