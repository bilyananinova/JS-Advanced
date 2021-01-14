function lastKNumbersSequence(n, k) {
    let array = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let current = array.slice(start, start + k)
            .reduce((a, c) => a + c, 0);

        array.push(current)

    }

    return array;
}

lastKNumbersSequence(6, 3);
console.log('-----');
lastKNumbersSequence(8, 2);

