function squareOfStars(arg) {

    let str = '* '.repeat(arg)

    if (str != '') {
        for (let i = 0; i < arg; i++) {
            console.log(str);
        }

        
    } else {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5));
        }
    }

}


squareOfStars(1);
console.log('---------');
squareOfStars(2);
console.log('---------');
squareOfStars(5);
console.log('---------');
squareOfStars();
