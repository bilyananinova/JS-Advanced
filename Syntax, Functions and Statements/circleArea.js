function circleArea(arg) {

    if (typeof arg === 'number') {
        let result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    }
}

circleArea(5);
console.log('--------');
circleArea('name');
