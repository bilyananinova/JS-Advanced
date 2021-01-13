function sameNumbers(arg) {

    let sum = 0;
    arg = arg.toString();
    let isSame = true;

    for (let i = 0; i < arg.length; i++) {
        let cur = arg[i];

        for (let j = i + 1; j < arg.length; j++) {
            let next = arg[j]

            if (cur != next) {
                isSame = false;
                break;
            }
        }

        sum += Number(arg[i])
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
console.log('');
sameNumbers(1234)
