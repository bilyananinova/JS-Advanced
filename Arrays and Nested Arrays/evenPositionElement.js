function evenPositionElement(input) {
    let str = '';

    for(let i = 0; i < input.length; i++) {
        if(i % 2 === 0) {
            str += `${input[i]} `;
        }
    }

    return str;
}

evenPositionElement(['20', '30', '40']);
console.log('-----');
evenPositionElement(['5', '10']);
