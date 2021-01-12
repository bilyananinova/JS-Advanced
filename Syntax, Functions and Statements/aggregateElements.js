function aggregateElements(arr) {

    let sum = arr.reduce((a, c) => a + c, 0);
    let sumOfInverseValues = arr.reduce((a, c) => a + 1/c, 0);
    let concat = arr.join('');
    console.log(sum);
    console.log(sumOfInverseValues);
    console.log(concat);
}


aggregateElements([1, 2, 3]);
console.log('-----');
aggregateElements([2, 4, 8, 16]);
