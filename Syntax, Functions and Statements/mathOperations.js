function mathOperations(a, b, operator) {
    let result = 0;
    
    switch (operator) {
        case '+': result = a + b;
            break;
        case '-': result = a - b;
            break;
        case '*': result = a * b;
            break;
        case '/': result = a / b;
            break;
        case '%': result = a % b;
            break;
        case '**': result = a ** b;
            break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
console.log('------');
mathOperations(3, 5.5, '*');
