function extractIncreasingSubsequenceFromArray(array) {

    let max = 0;

    let arr = array.reduce((acc, curr) => {

        if (curr >= max) {
            max = curr;
            acc.push(max);
        }

        return acc
    }, []);

    return arr;

}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('-----');
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
console.log('-----');
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
