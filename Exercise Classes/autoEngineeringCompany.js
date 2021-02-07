function autoEngineeringCompany(input) {

    let cars = {};

    input.forEach(element => {
        let [brand, model, produced] = element.split(' | ');

        if (!cars[brand]) {
            cars[brand] = {};
        }

        if (!cars[brand][model]) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += Number(produced);
    });

    
    for (const brand of Object.keys(cars)) {
        console.log(brand);
        Object.keys(cars[brand]).forEach(model => {
            console.log(`###${model} -> ${cars[brand][model]}`);
        })
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)