function greatestCommonDivisor(a, b) {

    let start = Math.min(a, b);
    let divisor = 0;
    for(let i = start; i >= 0; i--) {
        if(a % i === 0 && b % i ===0) {
            divisor = i;
            break;
        }
    }

    console.log(divisor);
}

greatestCommonDivisor(15, 5);
console.log('------');
greatestCommonDivisor(2154, 458);
