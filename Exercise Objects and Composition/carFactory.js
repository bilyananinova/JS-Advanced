function carFactory(object) {

    function getEngine() {
        let engine = {};
        if (object.power <= 90) {
            engine = { power: 90, volume: 1800 };
        } else if (object.power >= 90 && object.power <= 120) {
            engine = { power: 120, volume: 2400 };
        } else {
            engine = { power: 200, volume: 3500 };
        }

        return engine
    }

    function getCarriage() {
        let carriage = {};
        carriage.type = object.carriage;
        carriage.color = object.color;

        return carriage
    }

    function getWheels() {
        let wheels = [];
        if (object.wheelsize % 2 == 0) {
            object.wheelsize -= 1;
        }

        let wheel = Math.floor(object.wheelsize)
        wheels.push(wheel, wheel, wheel, wheel);
        return wheels
    }

    return {
        model: object.model,
        engine: getEngine(),
        carriage: getCarriage(),
        wheels: getWheels(),
    }
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));
console.log('--------');
console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));
