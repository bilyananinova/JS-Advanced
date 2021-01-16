function printEveryNthElementFromAnArray (array, n) {
    let result = []
    array.filter((element,index) => {
        if(index % n === 0) {
            result.push(element);
        }
    });

    return result
}

printEveryNthElementFromAnArray (['5', '20', '31', '4', '20'], 2);
console.log('-----');
printEveryNthElementFromAnArray (['dsa','asd', 'test', 'tset'], 2);
console.log('-----');
printEveryNthElementFromAnArray (['1', '2','3', '4', '5'], 6);
