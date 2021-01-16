function rotateArray (array, rotations) {

    let rot = rotations % array.length;

    for (let i = 0; i < rot; i++) {
        
        let n = array.pop();
        array.unshift(n);
        
    }

    return array.join(' ');
}


rotateArray (['1', '2', '3', '4'], 2);
console.log('-----');
rotateArray (['Banana', 'Orange', 'Coconut', 'Apple'], 15);
